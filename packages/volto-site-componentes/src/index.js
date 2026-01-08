// Public components (explicit imports + named export for better ESLint import/named support)
import ListaTelefones from './components/ListaTelefones/ListaTelefones';
import Noticias from './components/Blocks/Listing/Noticias/Noticias';
import GridServicos from './components/Blocks/Listing/GridServicos/GridServicos';
import GridProg from './components/Blocks/Listing/GridProg/GridProg';
import BarraEstado from './components/BarraEstado/BarraEstado';
import BarraAcessibilidade from './components/BarraAcessibilidade/BarraAcessibilidade';

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

import MenuLateralBlockEdit from './components/Blocks/MenuLateral/Edit';
import MenuLateralBlockView from './components/Blocks/MenuLateral/View';

// Noticias com destaque
import NoticiasComDestaqueEdit from './components/Blocks/NoticiasComDestaque/Edit';
import NoticiasComDestaqueView from './components/Blocks/NoticiasComDestaque/View';
import destaqueSVG from '@plone/volto/icons/list-bullet.svg';
//reducers
import defaultReducers from '@plone/volto/reducers';
import locais from './reducers/locais/locais';
import ultimas from './reducers/ultimasNoticias/ultimas';

import EnderecoNew from './components/LocalTeaser/EnderecoTemplate';

import BannerBlockView from './components/Blocks/Banner/View';
import BannerBlockEdit from './components/Blocks/Banner/Edit';
import bannerSVG from '@plone/volto/icons/home.svg';

import CpfWidget from './components/Widgets/FormWidgets/CpfWidget';
import ListaAnexosWidget from './components/Widgets/FormWidgets/ListaAnexosWidget';

//ultimas noticias
import UltimasNoticiasEdit from './components/Blocks/UltimasNoticias/Edit';
import UltimasNoticiasViewDispatcher from './components/Blocks/UltimasNoticias/UltimasNoticiasDispatcher';

//gray and small text

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

  config.blocks.blocksConfig.ultimasNoticiasBlock = {
    id: 'ultimasNoticiasBlock',
    title: 'Últimas Notícias',
    group: 'procergs',
    icon: imageTextoSVG,
    edit: UltimasNoticiasEdit,
    view: UltimasNoticiasViewDispatcher, // <-- dispatcher aqui!
    sidebarTab: 1,
    variations: [
      {
        id: 'default',
        title: '3 itens (padrão)',
        template: 'default',
        isDefault: true,
      },
      {
        id: 'list',
        title: 'Lista (1-4 itens)',
        template: 'list',
        schemaEnhancer: ({ schema }) => {
          if (!schema.fieldsets[0].fields.includes('maxItems')) {
            schema.fieldsets[0].fields.push('maxItems');
          }
          schema.properties.maxItems = {
            title: 'Quantidade de itens',
            type: 'number',
            minimum: 1,
            maximum: 4,
            default: 3,
          };
          return schema;
        },
      },
    ],
  };

  config.blocks.blocksConfig.menuLateralBlock = {
    id: 'menuLateralBlock',
    title: 'Menu Lateral',
    group: 'procergs',
    icon: imageTextoSVG,
    edit: MenuLateralBlockEdit,
    view: MenuLateralBlockView,
    sidebarTab: 1,
  };

  // Bloco Notícias com Destaque
  config.blocks.blocksConfig.noticiasComDestaque = {
    id: 'noticiasComDestaque',
    title: 'Notícias com destaque',
    group: 'procergs',
    icon: destaqueSVG,
    edit: NoticiasComDestaqueEdit,
    view: NoticiasComDestaqueView,
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
    ultimas,
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
      id: 'noticias',
      title: 'Notícias',
      template: Noticias,
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

  config.blocks.blocksConfig.form.additionalFields.push({
    id: 'CpfWidget',
    label: 'CPF',
    component: CpfWidget,
    isValid: (formData, name) => true,
  });

  config.blocks.blocksConfig.form.additionalFields.push({
    id: 'ListaAnexosWidget',
    label: 'Lista de Anexos',
    component: ListaAnexosWidget,
    isValid: (formData, name) => true,
  });

  config.blocks.blocksConfig.form.attachment_fields = [
    ...(config.blocks.blocksConfig.form.attachment_fields || []),
    'ListaAnexosWidget',
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

// Export components for external use
export { BarraEstado, BarraAcessibilidade };
