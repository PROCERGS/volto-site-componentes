import React from 'react';
import PreviewLink from '../../PreviewLink/PreviewLink';

const GridWithImage = ({ items = [] }) => {
  return (
    <div className="grid-with-image">
      <div className="grid-link">
        {items.map((item) => (
          <a
            href={item['@type'] === 'Link' ? item.getRemoteUrl : (item.getURL ? item.getURL : item['url']) }
            key={item['@id']}
          >
            <div className="grid-item" key={item['@id']}>
              <div className="image">
                <PreviewLink
                  item={item}
                  alt={item.image_caption}
                  className="grid-image"
                  loading="lazy"
                />
              </div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GridWithImage;
