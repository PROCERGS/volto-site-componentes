import { defineMessages } from 'react-intl';

const messages = defineMessages({
  bannerType: {
    id: 'Banner Type',
    defaultMessage: 'Banner Type',
  },
  banner1: {
    id: 'First Image',
    defaultMessage: 'Banner #1',
  },
  banner2: {
    id: 'Second Image',
    defaultMessage: 'Banner #2',
  },
  banner3: {
    id: 'Third Image',
    defaultMessage: 'Banner #3',
  },
});

const bannerSchema = ({ intl }) => ({
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['banner1', 'banner2', 'banner3'],
    },
  ],
  properties: {
    banner1: {
      title: intl.formatMessage(messages.banner1),
      widget: 'object_browser',
      mode: 'link',
      allowExternals: false,
      selectableTypes: ['Banner'],
    },
    banner2: {
      title: intl.formatMessage(messages.banner2),
      widget: 'object_browser',
      mode: 'link',
      allowExternals: false,
      selectableTypes: ['Banner'],
    },
    banner3: {
      title: intl.formatMessage(messages.banner3),
      widget: 'object_browser',
      mode: 'link',
      allowExternals: false,
      selectableTypes: ['Banner'],
    },
  },
  required: [],
});

export default bannerSchema;
