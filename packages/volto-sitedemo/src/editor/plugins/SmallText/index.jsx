import React from 'react';
import MarkElementButton from '@plone/volto-slate/editor/ui/MarkElementButton';
import calloutSVG from '@plone/volto/icons/megaphone.svg';

export const SmallElement = ({ attributes, children }) => {
  return (
    <small {...attributes} style={{ display: 'inline' }}>{children}</small>
  );
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons['small'] = (props) => (
    <MarkElementButton
      format="small"
      icon={calloutSVG}
      title="Small"
      {...props}
    />
  );
  slate.inlineElements['small'] = SmallElement;

  slate.toolbarButtons.push('small');
  slate.expandedToolbarButtons.push('small');

  return config;
}