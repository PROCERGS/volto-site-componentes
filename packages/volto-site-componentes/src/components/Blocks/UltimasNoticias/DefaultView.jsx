import React from 'react';
import PreviewLink from '../../PreviewLink/PreviewLink';
import { flattenToAppURL } from '@plone/volto/helpers';
import './Noticias.css';

const UltimasNoticias = ({ items = [] }) => {
  return (
    <div className="custom-grid-with-image">
      <div className="custom-grid-link">
        {items.map((item) => (
          <a href={flattenToAppURL(item['@id'])} key={item['@id']}>
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default UltimasNoticias;
