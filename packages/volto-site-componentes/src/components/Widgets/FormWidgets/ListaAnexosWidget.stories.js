import React from 'react';
import ListaAnexosWidget from './ListaAnexosWidget';

export default {
  title: 'Widgets/ListaAnexosWidget',
  component: ListaAnexosWidget,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    id: {
      description: 'Field identifier',
    },
    value: {
      description: 'Array of file objects',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when files change',
    },
    required: {
      description: 'Whether the field is required',
    },
    disabled: {
      description: 'Whether the field is disabled',
    },
    error: {
      description: 'External error message',
    },
    placeholder: {
      description: 'Placeholder text',
    },
    title: {
      description: 'Field label',
    },
    description: {
      description: 'Field description text',
    },
  },
};

const Template = (args) => <ListaAnexosWidget {...args} />;

// Create mock file objects
const createMockFile = (name, size) => ({
  name,
  size,
  type: 'application/pdf',
});

export const Default = Template.bind({});
Default.args = {
  id: 'anexos',
  title: 'Anexos',
  placeholder: 'Selecione arquivos',
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const WithFiles = Template.bind({});
WithFiles.args = {
  id: 'anexos',
  title: 'Documentos Anexados',
  value: [
    createMockFile('documento1.pdf', 1024 * 500),
    createMockFile('relatorio.pdf', 1024 * 1024),
    createMockFile('comprovante.jpg', 1024 * 300),
  ],
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const Required = Template.bind({});
Required.args = {
  id: 'anexos',
  title: 'Anexos Obrigatórios',
  required: true,
  placeholder: 'Selecione arquivos',
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'anexos',
  title: 'Anexos',
  error: 'Por favor, adicione pelo menos um arquivo',
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'anexos',
  title: 'Anexos',
  value: [createMockFile('arquivo-existente.pdf', 1024 * 800)],
  disabled: true,
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  id: 'anexos',
  title: 'Upload de Documentos',
  description: 'Formatos aceitos: PDF, JPG, PNG. Tamanho máximo: 5MB por arquivo. Limite: 5 arquivos.',
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const MaxFiles = Template.bind({});
MaxFiles.args = {
  id: 'anexos',
  title: 'Anexos (Limite Atingido)',
  value: [
    createMockFile('arquivo1.pdf', 1024 * 500),
    createMockFile('arquivo2.pdf', 1024 * 600),
    createMockFile('arquivo3.pdf', 1024 * 700),
    createMockFile('arquivo4.pdf', 1024 * 800),
    createMockFile('arquivo5.pdf', 1024 * 900),
  ],
  description: 'Limite máximo de 5 arquivos atingido',
  onChange: (id, value) => console.log('Changed:', { id, value }),
};