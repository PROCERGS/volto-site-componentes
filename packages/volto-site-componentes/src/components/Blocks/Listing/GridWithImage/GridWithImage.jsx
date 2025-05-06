import React from 'react';
import PreviewLink from '../../../PreviewLink/PreviewLink';
import './GridWithImage.css';

const GridWithImage = ({ items = [] }) => {
  return (
    <div className="custom-grid-with-image">
      <div className="custom-grid-link">
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

export default GridWithImage;
