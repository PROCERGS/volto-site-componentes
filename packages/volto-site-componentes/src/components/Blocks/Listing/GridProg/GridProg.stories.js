import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GridProg from './GridProg';

export default {
  title: 'Blocks/Listing/GridProg',
  component: GridProg,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    items: {
      description: 'Array of program items to display',
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

const Template = (args) => <GridProg {...args} />;

// Mock program items
//botar true para testar com imagem
const createProgramItem = (id, title, hasImage = false) => ({
  '@id': `/programas/programa-${id}`,
  title: title,
  image_field: hasImage ? 'preview_image' : null,
  image_caption: `Caption for ${title}`,
  preview_image: hasImage ? {
    download: `https://placehold.co/600x400`,
  } : 'https://placehold.co/600x400',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    createProgramItem(1, 'Programa de Educação'),
    createProgramItem(2, 'Programa de Saúde'),
    createProgramItem(3, 'Programa de Habitação'),
    createProgramItem(4, 'Programa de Cultura'),
  ],
  isEditMode: false,
};

export const ManyItems = Template.bind({});
ManyItems.args = {
  items: [
    createProgramItem(1, 'Educação Básica'),
    createProgramItem(2, 'Saúde da Família'),
    createProgramItem(3, 'Habitação Popular'),
    createProgramItem(4, 'Cultura e Arte'),
    createProgramItem(5, 'Esporte e Lazer'),
    createProgramItem(6, 'Assistência Social'),
    createProgramItem(7, 'Meio Ambiente'),
    createProgramItem(8, 'Tecnologia e Inovação'),
  ],
  isEditMode: false,
};

export const EditMode = Template.bind({});
EditMode.args = {
  items: [
    createProgramItem(1, 'Programa em Edição 1'),
    createProgramItem(2, 'Programa em Edição 2'),
    createProgramItem(3, 'Programa em Edição 3'),
  ],
  isEditMode: true,
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [createProgramItem(1, 'Programa Único')],
  isEditMode: false,
};

export const MixedContent = Template.bind({});
MixedContent.args = {
  items: [
    createProgramItem(1, 'Programa com Imagem'),
    createProgramItem(2, 'Programa sem Imagem', false),
    createProgramItem(3, 'Outro Programa com Imagem'),
    createProgramItem(4, 'Mais um sem Imagem', false),
  ],
  isEditMode: false,
};

export const LongTitles = Template.bind({});
LongTitles.args = {
  items: [
    createProgramItem(1, 'Programa Nacional de Desenvolvimento Sustentável e Inclusão Social'),
    createProgramItem(2, 'Programa de Apoio às Micro e Pequenas Empresas Regionais'),
    createProgramItem(3, 'Programa de Modernização da Gestão Pública Municipal'),
    createProgramItem(4, 'Programa de Formação Continuada para Profissionais da Educação'),
  ],
  isEditMode: false,
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  isEditMode: false,
};