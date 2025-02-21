import { TEXTSIZE } from './constants';

export const withTextsize = (editor) => {
  const { normalizeNode, isInline } = editor; // we can also normalize plugin data here

  editor.isInline = (element) => {
    return element.type === TEXTSIZE ? true : isInline(element);
  };

  return editor;
};