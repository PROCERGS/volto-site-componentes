import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';

const GridWithImage = ({ items = [] }) => {
  console.log(items);

  return (
    <div className="grid-with-image">
      <div className="grid">
        {items.map((item) => (
          <Link to={item.url}>
            <div className="grid-item" key={item['@id']}>
              <div className="image">
                <img
                  src={
                    item.image_scales?.imagem[0]?.download ||
                    '/icone-servico-servidor.png'
                  }
                  alt={item.title || 'Image'}
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
