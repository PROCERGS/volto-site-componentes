import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import UltimasNoticiasDefaultView from './DefaultView';

export default {
  title: 'Blocks/UltimasNoticias',
  component: UltimasNoticiasDefaultView,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const createNewsItem = (id, title, subject) => ({
  '@id': `/noticias/noticia-${id}`,
  title,
  Subject: subject ? [subject] : [],
  description: `Descrição da ${title}`,
  image_field: 'preview_image',
  image_caption: `Imagem da notícia: ${title}`,
});

const Template = (args) => <UltimasNoticiasDefaultView {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    createNewsItem(1, 'Nova política de desenvolvimento', 'Política'),
    createNewsItem(2, 'Inauguração de centro comunitário', 'Infraestrutura'),
    createNewsItem(3, 'Programa de capacitação profissional', 'Educação'),
  ],
  isEditMode: false,
  variationId: 'default',
};

export const ListView = Template.bind({});
ListView.args = {
  items: [
    createNewsItem(1, 'Primeira notícia da lista', 'Geral'),
    createNewsItem(2, 'Segunda notícia importante', 'Destaque'),
    createNewsItem(3, 'Terceira notícia do dia', 'Economia'),
    createNewsItem(4, 'Quarta notícia relevante', 'Tecnologia'),
  ],
  isEditMode: false,
  variationId: 'list',
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  isEditMode: false,
  variationId: 'default',
};