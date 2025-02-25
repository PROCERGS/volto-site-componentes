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
      ['grande', 'Grande'],
      ['small', 'Pequeno'],
    ],
    },
  },
  required: [],
  };