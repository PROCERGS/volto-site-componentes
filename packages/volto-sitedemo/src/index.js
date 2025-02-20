import ListaTelefones from './components/ListaTelefones/ListaTelefones';
import GridWithImage from './components/Blocks/Listing/GridWithImage';

//Locais
import LocaisBlockEdit from './components/Blocks/LocaisBlock/Edit';
import LocaisBlockView from './components/Blocks/LocaisBlock/View';
import locaisSVG from '@plone/volto/icons/home.svg';

//reducers
import defaultReducers from '@plone/volto/reducers';
import locais from './reducers/locais/locais';

import EnderecoNew from './components/LocalTeaser/EnderecoTemplate';

import "./theme/custom.less";
import paintSVG from "@plone/volto/icons/paint.svg";
import { Icon } from "@plone/volto/components";


const applyConfig = (config) => {
  config.widgets.widget.lista_telefones = ListaTelefones;
  //Bloco Locais
  config.blocks.blocksConfig.locaisBlock = {
    id: 'locaisBlock',
    title: 'Listagem de Locais',
    group: 'procergs',
    icon: locaisSVG,
    edit: LocaisBlockEdit,
    view: LocaisBlockView,
    sidebarTab: 1,
  };

  /// Grupos de Blocos
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'procergs', title: 'Procergs' },
  ];

  // Reducers
  const localReducers = {
    ...defaultReducers,
    locais,
  };
  config.addonReducers = { ...config.addonReducers, ...localReducers };

  config.blocks.blocksConfig.teaser.variations = [
    ...config.blocks.blocksConfig.teaser.variations,
    {
      id: 'local',
      title: 'Local',
      isDefault: true,
      template: EnderecoNew,
    },
  ];

  config.blocks.blocksConfig.listing.variations = [
    ...(config.blocks.blocksConfig.listing.variations || []),
    {
      id: 'grid-with-image',
      title: 'Grid with Image',
      template: GridWithImage,
    },
  ];

  config.settings.slate.styleMenu = {
    ...(config.settings.slate.styleMenu || {}),
    blockStyles: [
      {
        cssClass: "primary",
        label: "Small",
        icon: () => <Icon name={paintSVG} size="18px" />,
      },
      {
        cssClass: "secondary",
        label: "Gray",
        icon: () => <Icon name={paintSVG} size="18px" />,
      },
    ],
  };

  return config;
};

export default applyConfig;
