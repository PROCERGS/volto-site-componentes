import React from 'react';
import ListaTelefones from './ListaTelefones';

export default {
  title: 'Components/ListaTelefones',
  component: ListaTelefones,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      description: 'Array of telephone numbers',
    },
    onChange: {
      action: 'changed',
      description: 'Function called when the list changes',
    },
    id: {
      description: 'Field identifier',
    },
  },
};

const Template = (args) => <ListaTelefones {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'telefones',
  value: [],
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const WithNumbers = Template.bind({});
WithNumbers.args = {
  id: 'telefones',
  value: ['(51) 3333-4444', '(51) 99999-8888', '(11) 2222-3333'],
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const SingleNumber = Template.bind({});
SingleNumber.args = {
  id: 'telefones',
  value: ['(51) 3333-4444'],
  onChange: (id, value) => console.log('Changed:', { id, value }),
};

export const ManyNumbers = Template.bind({});
ManyNumbers.args = {
  id: 'telefones',
  value: [
    '(51) 3333-4444',
    '(51) 99999-8888',
    '(11) 2222-3333',
    '0800 123 4567',
    '(48) 3333-1111',
  ],
  onChange: (id, value) => console.log('Changed:', { id, value }),
};