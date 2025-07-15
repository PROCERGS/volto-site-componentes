import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Noticias from './Noticias';

export default {
  title: 'Blocks/Listing/Noticias',
  component: Noticias,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    items: {
      description: 'Array of news items to display',
    },
    isEditMode: {
      description: 'Whether the component is in edit mode',
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Noticias {...args} />;

// Mock news items
//botar true para testar com imagem
const createNewsItem = (id, title, subject, hasImage = false) => ({
  '@id': `/noticias/noticia-${id}`,
  title: title,
  Subject: subject ? [subject] : [],
  image_field: hasImage ? 'preview_image' : null,
  image_caption: `Imagem da notícia: ${title}`,
  preview_image: hasImage ? {
    download: `https://via.placeholder.com/400x250/dc3545/ffffff?text=Noticia+${id}`,
  } : null,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    createNewsItem(1, 'Governo anuncia novo programa social', 'Política'),
    createNewsItem(2, 'Obras de infraestrutura começam no próximo mês', 'Infraestrutura'),
    createNewsItem(3, 'Secretaria de Saúde amplia atendimento', 'Saúde'),
    createNewsItem(4, 'Educação recebe novos investimentos', 'Educação'),
  ],
  isEditMode: false,
};

export const ManyNews = Template.bind({});
ManyNews.args = {
  items: [
    createNewsItem(1, 'Notícia importante sobre economia', 'Economia'),
    createNewsItem(2, 'Evento cultural acontece neste fim de semana', 'Cultura'),
    createNewsItem(3, 'Esporte local ganha destaque nacional', 'Esporte'),
    createNewsItem(4, 'Tecnologia chega às escolas públicas', 'Tecnologia'),
    createNewsItem(5, 'Meio ambiente é tema de nova campanha', 'Meio Ambiente'),
    createNewsItem(6, 'Segurança pública tem novos recursos', 'Segurança'),
    createNewsItem(7, 'Transporte público será modernizado', 'Transporte'),
    createNewsItem(8, 'Agricultura familiar recebe apoio', 'Agricultura'),
  ],
  isEditMode: false,
};

export const EditMode = Template.bind({});
EditMode.args = {
  items: [
    createNewsItem(1, 'Notícia em modo de edição', 'Categoria'),
    createNewsItem(2, 'Outra notícia sendo editada', 'Tema'),
  ],
  isEditMode: true,
};

export const WithoutSubject = Template.bind({});
WithoutSubject.args = {
  items: [
    createNewsItem(1, 'Notícia sem categoria definida', null),
    createNewsItem(2, 'Outra notícia sem tema', null),
    createNewsItem(3, 'Mais uma sem classificação', null),
  ],
  isEditMode: false,
};

export const MixedContent = Template.bind({});
MixedContent.args = {
  items: [
    createNewsItem(1, 'Notícia com imagem e categoria', 'Geral'),
    createNewsItem(2, 'Notícia sem imagem', 'Especial', false),
    createNewsItem(3, 'Notícia sem categoria', null),
    createNewsItem(4, 'Notícia completa', 'Destaque'),
  ],
  isEditMode: false,
};

export const LongTitles = Template.bind({});
LongTitles.args = {
  items: [
    createNewsItem(
      1,
      'Título muito longo que pode quebrar em múltiplas linhas no layout da grade de notícias',
      'Categoria Extensa'
    ),
    createNewsItem(
      2,
      'Governo Federal anuncia pacote de medidas econômicas para estimular o crescimento',
      'Economia'
    ),
    createNewsItem(
      3,
      'Conferência Internacional sobre Mudanças Climáticas acontece na próxima semana',
      'Meio Ambiente'
    ),
  ],
  isEditMode: false,
};

export const SingleNews = Template.bind({});
SingleNews.args = {
  items: [createNewsItem(1, 'Única notícia disponível', 'Destaque')],
  isEditMode: false,
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  isEditMode: false,
};