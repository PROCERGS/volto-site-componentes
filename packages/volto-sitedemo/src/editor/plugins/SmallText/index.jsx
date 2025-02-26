import React from 'react';
import MarkElementButton from '@plone/volto-slate/editor/ui/MarkElementButton';
import subtextSVG from '@plone/volto/icons/subtext.svg';

export const SmallElement = ({ children }) => {
  return <small>{children}</small>;
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons['small'] = (props) => (
    <MarkElementButton
      title="Small"
      format="small"
      icon={subtextSVG}
      {...props}
    />
  );
  slate.elements = {
    ...config.settings.slate.elements,
    small: ({ children }) => <small>{children}</small>,
  };
  slate.inlineElements = [...config.settings.slate.inlineElements, 'small'];

  slate.toolbarButtons.push('small');
  slate.expandedToolbarButtons.push('small');

  return config;
}
