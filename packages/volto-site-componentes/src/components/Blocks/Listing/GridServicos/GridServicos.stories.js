import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import GridServicos from './GridServicos';

export default {
  title: 'Blocks/Listing/GridServicos',
  component: GridServicos,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    items: {
      description: 'Array of service items to display',
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

const Template = (args) => <GridServicos {...args} />;

// Mock service items
//botar true para testar com imagem
const createServiceItem = (
  id,
  title,
  subtitle,
  description,
  hasImage = false,
) => ({
  '@id': `/servicos/servico-${id}`,
  title: title,
  subtitle: subtitle,
  description: description,
  image_field: hasImage ? 'preview_image' : null,
  image_caption: `Imagem do ${title}`,
  preview_image: hasImage
    ? {
        download: `https://placehold.co/600x400`,
      }
    : 'https://placehold.co/600x400',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    createServiceItem(
      1,
      'Carteira de Identidade',
      'Emissão de RG',
      'Solicite a emissão ou segunda via da sua carteira de identidade de forma rápida e prática.',
    ),
    createServiceItem(
      2,
      'Licenciamento de Veículos',
      'DETRAN',
      'Realize o licenciamento anual do seu veículo e mantenha sua documentação em dia.',
    ),
    createServiceItem(
      3,
      'Atestado de Antecedentes',
      'Polícia Civil',
      'Obtenha seu atestado de antecedentes criminais para fins diversos.',
    ),
  ],
  isEditMode: false,
};

export const ManyServices = Template.bind({});
ManyServices.args = {
  items: [
    createServiceItem(
      1,
      'IPTU',
      'Tributos',
      'Consulte e pague seu IPTU online',
    ),
    createServiceItem(
      2,
      'Água e Esgoto',
      'CORSAN',
      'Segunda via de contas e serviços',
    ),
    createServiceItem(
      3,
      'Energia Elétrica',
      'CEEE',
      'Consultas e solicitações',
    ),
    createServiceItem(4, 'Saúde', 'SUS', 'Agendamento de consultas e exames'),
    createServiceItem(5, 'Educação', 'Matrícula', 'Matrícula na rede pública'),
    createServiceItem(6, 'Transporte', 'Cartão TRI', 'Solicitação e recarga'),
  ],
  isEditMode: false,
};

export const EditMode = Template.bind({});
EditMode.args = {
  items: [
    createServiceItem(
      1,
      'Serviço em Edição',
      'Subtítulo',
      'Descrição do serviço',
    ),
    createServiceItem(2, 'Outro Serviço', 'Mais info', 'Outra descrição'),
  ],
  isEditMode: true,
};

export const WithoutImages = Template.bind({});
WithoutImages.args = {
  items: [
    createServiceItem(
      1,
      'Serviço sem Imagem',
      'Informação',
      'Este serviço não possui imagem associada',
      false,
    ),
    createServiceItem(
      2,
      'Outro sem Imagem',
      'Detalhes',
      'Também não tem imagem',
      false,
    ),
  ],
  isEditMode: false,
};

export const LongContent = Template.bind({});
LongContent.args = {
  items: [
    createServiceItem(
      1,
      'Serviço com Título Muito Longo que Pode Quebrar em Múltiplas Linhas',
      'Subtítulo também extenso com várias informações',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    ),
    createServiceItem(2, 'Título Normal', 'Subtítulo', 'Descrição curta'),
  ],
  isEditMode: false,
};

export const SingleService = Template.bind({});
SingleService.args = {
  items: [
    createServiceItem(
      1,
      'Serviço Único',
      'Informação Completa',
      'Este é o único serviço disponível nesta seção.',
    ),
  ],
  isEditMode: false,
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  isEditMode: false,
};
