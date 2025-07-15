import '@plone/volto/config'; // This is the bootstrap for the global config - client side
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import enMessages from '@root/../locales/en.json';
import config from '@plone/volto/registry';

import '@root/theme';

// Initialize blocks configuration
config.blocks = {
  ...config.blocks,
  blocksConfig: {
    ...config.blocks.blocksConfig,
    banner: {
      id: 'banner',
      title: 'Banner',
      extensions: {},
      variations: [],
    },
    imagemTexto: {
      id: 'imagemTexto',
      title: 'Imagem e Texto',
      extensions: {},
      variations: [],
    },
    locaisBlock: {
      id: 'locaisBlock',
      title: 'Locais Block',
      extensions: {},
      variations: [],
    },
    menuLateral: {
      id: 'menuLateral',
      title: 'Menu Lateral',
      extensions: {},
      variations: [],
    },
    ultimasNoticias: {
      id: 'ultimasNoticias',
      title: 'Últimas Notícias',
      extensions: {},
      variations: [],
    },
  },
};

const mockStore = configureStore([]);

// Create a default mock store state
const defaultStore = mockStore({
  router: {
    location: {
      pathname: '/',
    },
  },
  intl: {
    locale: 'en',
    messages: enMessages,
  },
  content: {
    data: {},
  },
  search: {
    subrequests: {},
  },
  locais: {
    data: [],
  },
});

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={defaultStore}>
      <IntlProvider messages={enMessages} locale="en" defaultLocale="en">
        <StaticRouter location="/">
          <Story />
        </StaticRouter>
      </IntlProvider>
    </Provider>
  ),
];