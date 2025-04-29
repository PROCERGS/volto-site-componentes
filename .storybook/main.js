const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const projectRootPath = path.resolve('.');
const lessPlugin = require('@plone/volto/webpack-plugins/webpack-less-plugin');
const scssPlugin = require('razzle-plugin-scss');

const createConfig = require('razzle/config/createConfigAsync.js');
const razzleConfig = require(path.join(projectRootPath, 'razzle.config.js'));

const SVGLOADER = {
  test: /icons\/.*\.svg$/,
  use: [
    {
      loader: 'svg-loader',
    },
    {
      loader: 'svgo-loader',
      options: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                convertPathData: false,
                removeViewBox: false,
              },
            },
          },
          'removeTitle',
          'removeUselessStrokeAndFill',
        ],
      },
    },
  ],
};

const defaultRazzleOptions = {
  verbose: false,
  debug: {},
  buildType: 'iso',
  cssPrefix: 'static/css',
  jsPrefix: 'static/js',
  enableSourceMaps: true,
  enableReactRefresh: true,
  enableTargetBabelrc: false,
  enableBabelCache: true,
  forceRuntimeEnvVars: [],
  mediaPrefix: 'static/media',
  staticCssInDev: false,
  emitOnErrors: false,
  disableWebpackbar: false,
  browserslist: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie 11',
    'not dead',
  ],
};

module.exports = {
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: { builder: { useSWC: true } },
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: () => true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` is 'DEVELOPMENT' | 'PRODUCTION'

    // ---- base Volto + Razzle config ---------------------------------------
    const baseConfig = await createConfig(
      'web',
      'dev',
      {
        modifyWebpackConfig: razzleConfig.modifyWebpackConfig,
        plugins: razzleConfig.plugins,
      },
      webpack,
      false,
      undefined,
      [],
      defaultRazzleOptions,
    );

    const { AddonRegistry } = require('@plone/registry/addon-registry');
    const { registry } = AddonRegistry.init(projectRootPath);

    // ---- Volto LESS / SCSS loaders ----------------------------------------
    config = lessPlugin({ registry }).modifyWebpackConfig({
      env: { target: 'web', dev: 'dev' },
      webpackConfig: config,
      webpackObject: webpack,
      options: {},
    });

    config = scssPlugin.modifyWebpackConfig({
      env: { target: 'web', dev: 'dev' },
      webpackConfig: config,
      webpackObject: webpack,
      options: { razzleOptions: {} },
    });

    // ---- SVG loader --------------------------------------------------------
    config.module.rules.unshift(SVGLOADER);
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /icons\/.*\.svg$/;

    // ---- Global defs -------------------------------------------------------
    config.plugins.unshift(
      new webpack.DefinePlugin({
        __DEVELOPMENT__: true,
        __CLIENT__: true,
        __SERVER__: false,
      }),
    );

    // ---- Merge aliases / fallbacks ----------------------------------------
    const resultConfig = {
      ...config,
      resolve: {
        ...config.resolve,
        alias: { ...config.resolve.alias, ...baseConfig.resolve.alias },
        fallback: { ...config.resolve.fallback, zlib: false },
      },
    };

    // ---- Add-ons (paths & babel) ------------------------------------------
    const addonPaths = registry
      .getAddons()
      .map((addon) => fs.realpathSync(addon.modulePath));

    /**
     * Recursively find the rule that uses `babel-loader`
     */
    function findBabelRule(rules) {
      for (const rule of rules) {
        if (Array.isArray(rule?.oneOf)) {
          const found = findBabelRule(rule.oneOf);
          if (found) return found;
        }
        if (
          rule?.use &&
          ((Array.isArray(rule.use) &&
            rule.use.some(
              (u) => u.loader && u.loader.includes('babel-loader'),
            )) ||
            (typeof rule.use === 'object' &&
              rule.use.loader &&
              rule.use.loader.includes('babel-loader')))
        ) {
          return rule;
        }
      }
      return null;
    }

    const babelRule = findBabelRule(resultConfig.module.rules);
    if (!babelRule) {
      throw new Error('Could not locate the babel-loader rule in Storybook');
    }

    // Exclude every node_modules file **except** @plone/volto ─ and never
    // exclude files that live inside an add-on path.
    babelRule.exclude = (input) =>
      /node_modules\/(?!(@plone\/volto)\/)/.test(input) &&
      /storybook-config-entry\.js$/.test(input) &&
      /storybook-stories\.js$/.test(input) &&
      !addonPaths.some((p) => input.includes(p));

    // Ensure `include` is an array before expanding it
    const originalInclude = Array.isArray(babelRule.include)
      ? babelRule.include
      : babelRule.include
      ? [babelRule.include]
      : [];

    babelRule.include = [
      /preview\.jsx/,
      ...originalInclude,
      ...addonPaths,
    ];

    // ---- Let addons further extend the config -----------------------------
    const addonExtenders = registry.getAddonExtenders().map((m) => require(m));
    const extendedConfig = addonExtenders.reduce(
      (acc, extender) =>
        extender.modify(acc, { target: 'web', dev: 'dev' }, config),
      resultConfig,
    );

    return extendedConfig;
  },
};
