import React from 'react';
import PreviewLink from '../../../PreviewLink/PreviewLink';

const GridServicos = ({ items = [] }) => {
  return (
    <div className="servicos-grid">
      <div className="servicos-grid-link">
        {items.map((item) => (
          <a
            href={
              item['@type'] === 'Link'
                ? item.getRemoteUrl
                : item.getURL
                  ? item.getURL
                  : item['url']
            }
            key={item['@id']}
          >
            <div className="servicos-grid-item" key={item['@id']}>
              <div className="servicos-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
              <div className="servicos-image">
                <PreviewLink
                  item={item}
                  alt={item.image_caption}
                  className="servicos-grid-image"
                  loading="lazy"
                />
              </div>
              <div className="servicos-content">
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GridServicos;
