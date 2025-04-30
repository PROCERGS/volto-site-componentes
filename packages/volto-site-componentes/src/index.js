import ListaTelefones from './components/ListaTelefones/ListaTelefones';
import GridWithImage from './components/Blocks/Listing/GridWithImage/GridWithImage';
import GridServicos from './components/Blocks/Listing/GridServicos/GridServicos';
import GridProg from './components/Blocks/Listing/GridProg/GridProg';

//import schemaEnhancerProg from './components/Blocks/Listing/GridProg/schemaEnhancer';
//import schemaEnhancerServicos from './components/Blocks/Listing/GridServicos/schemaEnhancer';

//Locais
import LocaisBlockEdit from './components/Blocks/LocaisBlock/Edit';
import LocaisBlockView from './components/Blocks/LocaisBlock/View';
import locaisSVG from '@plone/volto/icons/home.svg';

//Imagem com descricao
import ImagemTextoBlockEdit from './components/Blocks/ImagemTexto/Edit';
import ImagemTextoBlockView from './components/Blocks/ImagemTexto/View';
import imageTextoSVG from '@plone/volto/icons/image.svg';

//reducers
import defaultReducers from '@plone/volto/reducers';
import locais from './reducers/locais/locais';

import EnderecoNew from './components/LocalTeaser/EnderecoTemplate';

import BannerBlockView from './components/Blocks/Banner/View';
import BannerBlockEdit from './components/Blocks/Banner/Edit';
import bannerSVG from '@plone/volto/icons/home.svg';

//gray and small text
import './theme/custom.less';

import installSlate from './editor';

const applyConfig = (config) => {
  config = [installSlate].reduce((acc, apply) => apply(acc), config);

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
  // Bloco de Imagem com Descricao
  config.blocks.blocksConfig.imagemTextoBlock = {
    id: 'imagemTextoBlock',
    title: 'Imagem com descrição',
    group: 'procergs',
    icon: imageTextoSVG,
    edit: ImagemTextoBlockEdit,
    view: ImagemTextoBlockView,
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

  config.blocks.blocksConfig.listing.variations = [
    ...(config.blocks.blocksConfig.listing.variations || []),
    {
      id: 'grid-servicos',
      title: 'Grid Servicos',
      template: GridServicos,
    },
  ];

  config.blocks.blocksConfig.listing.variations = [
    ...(config.blocks.blocksConfig.listing.variations || []),
    {
      id: 'grid-programas',
      title: 'Grid Programas e Projetos',
      template: GridProg,
    },
  ];

  config.blocks.blocksConfig.banner = {
    id: 'banner',
    title: 'Banner',
    group: 'procergs',
    icon: bannerSVG,
    edit: BannerBlockEdit,
    view: BannerBlockView,
    sidebarTab: 1,
  };

  return config;
};

export default applyConfig;
