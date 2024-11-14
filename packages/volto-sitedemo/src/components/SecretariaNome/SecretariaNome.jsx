import React from 'react';

const SecretariaNome = ({ content, url }) => {
  return (
    <div className="secretaria-wrapper">
      <div>
        {content && (
          <a className="secretaria-nome" href={url}>
            <span>{content}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default SecretariaNome;
