import installDefaultPlugins from './plugins';
import MarkElementButton from '@plone/volto-slate/editor/ui/MarkElementButton';
import textsizeSVG from '@plone/volto/icons/format.svg';

export default function applyConfig(config) {
  
  config.settings.slate.elements = {
    ...config.settings.slate.elements,
    small: ({ children }) => <small>{children}</small>,
  };

  config.settings.slate.inlineElements = [
    ...config.settings.slate.inlineElements,
    'small',
  ];

  config.settings.slate.buttons = {
    ...config.settings.slate.buttons,
    small: (props) => {
      return (
        <MarkElementButton
          title="Small"
          format="small"
          icon={textsizeSVG}
          {...props}
        />
      );
    },
  };

  config.settings.slate.toolbarButtons = [
    ...(config.settings.slate.toolbarButtons || []),
    'small',
  ];

  config = installDefaultPlugins(config);
  return config;
}
