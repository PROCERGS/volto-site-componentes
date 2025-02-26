import installDefaultPlugins from './plugins';
import paintSVG from '@plone/volto/icons/paint.svg';
import { Icon } from '@plone/volto/components';

export default function applyConfig(config) {
  config = installDefaultPlugins(config);

  // Configuração do bloco de texto
  config.settings.slate.styleMenu = {
    ...(config.settings.slate.styleMenu || {}),
    blockStyles: [
      {
        cssClass: 'gray',
        label: 'Gray',
        icon: () => <Icon name={paintSVG} size="18px" />,
      },
    ],
  };

  return config;
}
