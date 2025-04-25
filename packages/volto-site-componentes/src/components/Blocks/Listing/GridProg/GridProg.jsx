import React from 'react';
import PreviewImg from '../../../PreviewImg/PreviewImg';
import './GridProg.css';

const GridProg = ({ items = [] }) => {
  return (
    <div className="prog-grid">
      <div className="prog-grid-link">
        {items.map((item, index) => (
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
            <div className="prog-grid-item" key={item['@id']}>
              <div className="prog-content">
                <h3>{item.title}</h3>
              </div>
              <div className="prog-image">
                <PreviewImg
                  item={item}
                  alt={item.image_caption}
                  className={`prog-grid-image color-${index % 4}`}
                  loading="lazy"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GridProg;
