import React from 'react';
import EnderecoTemplate from './EnderecoTemplate';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

const mockStore = configureStore([]);

export default {
  title: 'Components/LocalTeaser/EnderecoTemplate',
  component: EnderecoTemplate,
  decorators: [
    (Story) => (
      <Provider store={mockStore({})}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    data: {
      description: 'Component data including href and display options',
    },
    isEditMode: {
      description: 'Whether the component is in edit mode',
    },
    className: {
      description: 'Additional CSS classes',
    },
    style: {
      description: 'Inline styles',
    },
  },
};

const Template = (args) => <EnderecoTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: 'block-1',
  data: {
    href: [{ '@id': '/locais/sede-central' }],
    head_title: 'Nossa Sede Central',
    description: 'Visite nossa sede central em Porto Alegre',
    hide_description: false,
  },
  isEditMode: false,
};

export const EditMode = Template.bind({});
EditMode.args = {
  block: 'block-2',
  data: {},
  isEditMode: true,
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  block: 'block-3',
  data: {
    href: [{ '@id': '/locais/filial' }],
    head_title: 'Filial São Paulo',
    hide_description: true,
  },
  isEditMode: false,
};

export const MinimalData = Template.bind({});
MinimalData.args = {
  block: 'block-4',
  data: {
    href: [{ '@id': '/locais/unidade' }],
  },
  isEditMode: false,
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  block: 'block-5',
  data: {
    href: [{ '@id': '/locais/escritorio' }],
    head_title: 'Escritório Regional',
    description: 'Nosso escritório na região sul',
  },
  isEditMode: false,
  className: 'custom-teaser',
  style: { backgroundColor: '#f0f0f0', padding: '20px' },
};