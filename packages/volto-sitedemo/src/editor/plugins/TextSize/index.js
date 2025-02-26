import { defineMessages } from 'react-intl';
import { makeInlineElementPlugin } from '@plone/volto-slate/elementEditor';
import TextsizeElement from './TextsizeElement';
import { TextsizeEditorSchema } from './schema';
import { TEXTSIZE } from './constants';
import { withTextsize } from './extensions';
import textsizeSVG from '@plone/volto/icons/format.svg';

import './textsize.less';

const messages = defineMessages({
  edit: {
    id: 'Edit textsize',
    defaultMessage: 'Edit textsize',
  },
  delete: {
    id: 'Remove textsize',
    defaultMessage: 'Remove textsize',
  },
});

export default function installTextsizePlugin(config) {
  const { slate } = config.settings;
  slate.toolbarButtons = [...(slate.toolbarButtons || []), TEXTSIZE];

  const opts = {
    title: 'Textsize',
    pluginId: TEXTSIZE,
    elementType: TEXTSIZE,
    element: TextsizeElement,
    isInlineElement: true,
    editSchema: TextsizeEditorSchema,
    extensions: [withTextsize],
    hasValue: (formData) => !!formData,
    toolbarButtonIcon: textsizeSVG,
    messages,
  };
  const [installEditor] = makeInlineElementPlugin(opts);
  config = installEditor(config);
  return config;
}
