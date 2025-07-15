import React from 'react';
import Contato from './Contato';

export default {
  title: 'Components/Contato',
  component: Contato,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: {
      description: 'Contact information object',
    },
  },
};

const Template = (args) => <Contato {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: {
    tel_comercial: '5133334444',
    tel_celular: '51999998888',
    email: 'contato@example.com',
    url: 'https://www.example.com',
  },
};

export const AllFields = Template.bind({});
AllFields.args = {
  content: {
    email: 'contato@empresa.com.br',
    fax: '(51) 3333-5555',
    telefone_fax: '(51) 3333-4444',
    tel_comercial: '5133334444',
    tel_celular: '51999998888',
    voip: '1234',
    skype: 'empresa.skype',
    whatsapp: '(51) 99999-8888',
    url: 'https://www.empresa.com.br',
    horarios: 'Segunda a Sexta: 8h às 18h',
    link_whatsapp: 'https://wa.me/5511999998888',
    telefones: '(51) 3333-1111, (51) 3333-2222',
  },
};

export const MinimalContact = Template.bind({});
MinimalContact.args = {
  content: {
    tel_comercial: '5133334444',
    email: 'info@example.com',
  },
};

export const OnlyPhones = Template.bind({});
OnlyPhones.args = {
  content: {
    tel_comercial: '5133334444',
    tel_celular: '51999998888',
    telefone_fax: '(51) 3333-4444',
    whatsapp: '(51) 99999-8888',
  },
};

export const OnlyDigital = Template.bind({});
OnlyDigital.args = {
  content: {
    email: 'digital@example.com',
    url: 'https://www.example.com',
    skype: 'example.skype',
    link_whatsapp: 'https://wa.me/5511999998888',
  },
};
