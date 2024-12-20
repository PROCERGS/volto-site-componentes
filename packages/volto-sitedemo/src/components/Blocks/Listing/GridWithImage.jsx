import React from 'react';
import { Link } from 'react-router-dom';
import PreviewLink from '../../PreviewLink/PreviewLink';
import '../../../theme/components/GridWithImage.scss';

const GridWithImage = ({ items = [] }) => {
  console.log(items);
  return (
    <div className="grid-with-image">
      <div className="grid-link">
        {items.map((item) => (
          <a
            href={item.getRemoteUrl ? item.getRemoteUrl : `/${item.getId}`}
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
