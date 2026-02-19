import { TOOLTIP } from './constants';

export const withTooltip = (editor) => {
  const { isInline } = editor; // we can also normalize plugin data here

  editor.isInline = (element) => {
    return element && element.type === TOOLTIP ? true : isInline(element);
  };

  return editor;
};
