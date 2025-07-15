import React from 'react';
import Endereco from './Endereco';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Endereco',
  component: Endereco,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    content: {
      description: 'Address information object',
    },
  },
};

const Template = (args) => <Endereco {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: {
    title: 'Escritório Central',
    logradouro: 'Av. Borges de Medeiros',
    numero: '1501',
    bairro: 'Praia de Belas',
    municipio: 'Porto Alegre',
    estado: { token: 'RS' },
    pais: 'Brasil',
    cep: '90119-900',
  },
};

export const WithCoordinates = Template.bind({});
WithCoordinates.args = {
  content: {
    title: 'Filial São Paulo',
    logradouro: 'Av. Paulista',
    numero: '1578',
    bairro: 'Bela Vista',
    municipio: 'São Paulo',
    estado: { token: 'SP' },
    pais: 'Brasil',
    cep: '01310-200',
    coordenadas: '-23.561684, -46.656139',
  },
};

export const WithComplement = Template.bind({});
WithComplement.args = {
  content: {
    title: 'Unidade Shopping',
    logradouro: 'Rua dos Andradas',
    numero: '1234',
    complemento: '3º andar, Sala 301',
    bairro: 'Centro Histórico',
    municipio: 'Porto Alegre',
    estado: { token: 'RS' },
    pais: 'Brasil',
    cep: '90020-008',
  },
};

export const MinimalAddress = Template.bind({});
MinimalAddress.args = {
  content: {
    logradouro: 'Rua Exemplo',
    numero: '100',
    municipio: 'Porto Alegre',
  },
};

export const InternationalAddress = Template.bind({});
InternationalAddress.args = {
  content: {
    title: 'Office International',
    logradouro: '123 Main Street',
    numero: 'Suite 450',
    municipio: 'New York',
    estado: { token: 'NY' },
    pais: 'USA',
    cep: '10001',
  },
};
