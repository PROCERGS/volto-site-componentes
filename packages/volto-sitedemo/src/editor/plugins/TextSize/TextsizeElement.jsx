import React from 'react';

const TextsizeElement = (props) => {
  const { attributes, children, element } = props;
  const { data = {} } = element;
  const tag = data.textsize_size || 'span';

  console.log('TextsizeElement size:', data.textsize_size); // Debugging line

  return React.createElement(
    tag,
    attributes,
    children
  );
};

export default TextsizeElement;