import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Locais',
    defaultMessage: 'Locais',
  },
  options: {
    id: 'Opções',
    defaultMessage: 'Opções',
  },
  options_title: {
    id: 'Opções-title',
    defaultMessage: 'Opções',
  },
  options_choices_padrao: {
    id: 'Padrao',
    defaultMessage: 'Padrão',
  },
  options_choices_manchete: {
    id: 'Manchete',
    defaultMessage: 'Manchete',
  },
  options_choices_destaque: {
    id: 'Destaque',
    defaultMessage: 'Destaque',
  },
});

export const ultimasSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['options'],
      },
    ],
    properties: {
      options: {
        title: props.intl.formatMessage(messages.options_title),
        choices: [
          ['Padrão', props.intl.formatMessage(messages.options_choices_padrao)],
          [
            'manchete',
            props.intl.formatMessage(messages.options_choices_manchete),
          ],
          [
            'destaque',
            props.intl.formatMessage(messages.options_choices_destaque),
          ],
        ],
        type: 'string',
        default: 'right',
      },
    },
    required: ['options'],
  };
};
