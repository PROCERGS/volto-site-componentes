import React from 'react';
import { UniversalLink, Image } from '@plone/volto/components';
import './Banners.css';

const BannerBlockDefaultView = (props) => {
  const { banner1, banner2, banner3 } = props;

  const renderImage = (data) => (
    <div className={'banner-column'}>
      <UniversalLink href={data.url || data['@id']}>
        <Image
          item={data}
          src={data.url}
          alt={data.alt || ''}
          loading="lazy"
          responsive
        />
      </UniversalLink>
    </div>
  );

  return (
    <div className={'block banners'}>
      <div className={'banners-row'}>
        {banner1 && banner1[0] && renderImage(banner1[0])}
        {banner2 && banner2[0] && renderImage(banner2[0])}
        {banner3 && banner3[0] && renderImage(banner3[0])}
      </div>
    </div>
  );
};

export default BannerBlockDefaultView;
