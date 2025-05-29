import React from 'react';
import PreviewImg from '../../../PreviewImg/PreviewImg';
import './GridProg.css';
import { ConditionalLink } from '@plone/volto/components';

const GridProg = ({ items = [], isEditMode }) => {
  return (
    <div className="prog-grid">
      <div className="prog-grid-link">
        {items.map((item, index) => (
          <ConditionalLink
            key={item['@id']}
            item={item}
            condition={!isEditMode}
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
          </ConditionalLink>
        ))}
      </div>
    </div>
  );
};

export default GridProg;
