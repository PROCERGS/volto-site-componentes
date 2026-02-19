import { TEXTSIZE } from './constants';

export const withTextsize = (editor) => {
  const { isInline } = editor; // we can also normalize plugin data here

  editor.isInline = (element) => {
    return element && element.type === TEXTSIZE ? true : isInline(element);
  };

  return editor;
};
