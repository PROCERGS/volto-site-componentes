export const TextsizeEditorSchema = {
  title: 'Textsize',
  fieldsets: [
    {
    id: 'default',
    title: 'Default',
    fields: ['textsize_size'],
    },
  ],
  properties: {
    textsize_size: {
    title: 'Size',
    type: 'string',
    factory: 'Choice',
    choices: [
      ['h3', 'Grande'],
      ['small', 'Pequeno'],
    ],
    },
  },
  required: [],
  };