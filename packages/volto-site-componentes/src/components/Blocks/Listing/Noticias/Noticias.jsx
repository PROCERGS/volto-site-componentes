import React from 'react';
import PreviewLink from '../../../PreviewLink/PreviewLink';
import './Noticias.css';
import { ConditionalLink } from '@plone/volto/components';

const GridWithImage = ({ items = [], isEditMode }) => {
  return (
    <div className="custom-grid-with-image">
      <div className="custom-grid-link">
        {items.map((item) => (
          <ConditionalLink
            key={item['@id']}
            item={item}
            condition={!isEditMode}
          >
            <div className="custom-grid-item" key={item['@id']}>
              <div className="custom-image">
                <PreviewLink
                  item={item}
                  alt={item.image_caption}
                  className="custom-grid-image"
                  loading="lazy"
                />
              </div>
              <div className="custom-content">
                <h5>{item.Subject?.[0]}</h5>
                <h3>{item.title}</h3>
              </div>
            </div>
          </ConditionalLink>
        ))}
      </div>
    </div>
  );
};

export default GridWithImage;
