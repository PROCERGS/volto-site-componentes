import React from 'react';
import LocaisView from './DefaultView';

export default {
  title: 'Blocks/LocaisBlock',
  component: LocaisView,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <LocaisView {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: 'Nossos Locais',
  locais: [
    {
      '@id': '/locais/sede',
      title: 'Sede Central',
      logradouro: 'Av. Borges de Medeiros',
      numero: '1501',
      bairro: 'Praia de Belas',
      municipio: 'Porto Alegre',
      estado: { token: 'RS' },
      pais: 'Brasil',
      cep: '90119-900',
    },
    {
      '@id': '/locais/filial1',
      title: 'Filial Norte',
      logradouro: 'Rua dos Andradas',
      numero: '1234',
      bairro: 'Centro Histórico',
      municipio: 'Porto Alegre',
      estado: { token: 'RS' },
      pais: 'Brasil',
      cep: '90020-008',
    },
    {
      '@id': '/locais/filial2',
      title: 'Filial Sul',
      logradouro: 'Av. Ipiranga',
      numero: '6681',
      bairro: 'Partenon',
      municipio: 'Porto Alegre',
      estado: { token: 'RS' },
      pais: 'Brasil',
      cep: '90619-900',
    },
  ],
  isEditMode: false,
};

export const Empty = Template.bind({});
Empty.args = {
  headline: 'Locais',
  locais: [],
  isEditMode: false,
};

export const SingleLocation = Template.bind({});
SingleLocation.args = {
  headline: 'Nossa Localização',
  locais: [
    {
      '@id': '/locais/unico',
      title: 'Escritório Principal',
      logradouro: 'Av. Paulista',
      numero: '1578',
      bairro: 'Bela Vista',
      municipio: 'São Paulo',
      estado: { token: 'SP' },
      pais: 'Brasil',
      cep: '01310-200',
      coordenadas: '-23.561684, -46.656139',
    },
  ],
  isEditMode: false,
};