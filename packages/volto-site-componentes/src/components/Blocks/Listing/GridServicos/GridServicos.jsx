import React from 'react';
import PreviewLink from '../../../PreviewLink/PreviewLink';
import './GridServicos.css';
import { ConditionalLink } from '@plone/volto/components';

const GridServicos = ({ items = [], isEditMode }) => {
  return (
    <div className="servicos-grid">
      <div className="servicos-grid-link">
        {items.map((item) => (
          <ConditionalLink
            key={item['@id']}
            item={item}
            condition={!isEditMode}
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
          </ConditionalLink>
        ))}
      </div>
    </div>
  );
};

export default GridServicos;
