import React from 'react';
import ImagemTextoBlockView from './View';

export default {
  title: 'Blocks/ImagemTexto',
  component: ImagemTextoBlockView,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    data: {
      description: 'Block data configuration',
    },
  },
};

const Template = (args) => <ImagemTextoBlockView {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    image: 'https://placehold.co/600x400',
    image_position: 'right',
    image_description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    background_color: 'grey',
  },
};

export const ImageLeft = Template.bind({});
ImageLeft.args = {
  data: {
    image: 'https://placehold.co/600x400',
    image_position: 'left',
    image_description:
      'Esta é uma imagem alinhada à esquerda com texto à direita. O componente ajusta automaticamente o layout baseado na posição escolhida.',
    background_color: 'grey',
  },
};

export const TransparentBackground = Template.bind({});
TransparentBackground.args = {
  data: {
    image: 'https://placehold.co/600x400',
    image_position: 'right',
    image_description:
      'Este bloco tem fundo transparente, permitindo que o fundo da página seja visível através dele.',
    background_color: 'transparent',
  },
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  data: {
    image: 'https://placehold.co/600x400',
    image_position: 'left',
    image_description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    background_color: 'grey',
  },
};

export const NoImage = Template.bind({});
NoImage.args = {
  data: {
    image_position: 'right',
    image_description:
      'Este bloco não tem imagem configurada. Apenas o texto será exibido.',
    background_color: 'grey',
  },
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  data: {
    image: 'https://placehold.co/600x400',
    image_position: 'right',
    background_color: 'grey',
  },
};

export const MinimalConfig = Template.bind({});
MinimalConfig.args = {
  data: {},
};
