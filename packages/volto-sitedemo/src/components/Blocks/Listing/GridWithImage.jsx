import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link, Image } from 'react-router-dom';
import { Container as SemanticContainer } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import PreviewLink from '../../PreviewLink/PreviewLink';

const GridWithImage = ({ items = [] }) => {
  console.log(items);

  return (
    <div className="grid-with-image">
      <div className="grid">
        {items.map((item) => (
          <Link to={item.url}>
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
