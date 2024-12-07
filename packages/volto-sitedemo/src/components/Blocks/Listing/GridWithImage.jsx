import React from 'react';
import { Link } from 'react-router-dom';
import PreviewLink from '../../PreviewLink/PreviewLink';

const GridWithImage = ({ items = [] }) => {
  return (
    <div className="grid-with-image">
      <div className="grid">
        {items.map((item) => (
          <Link to={item.url} key={item['@id']}>
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridWithImage;
