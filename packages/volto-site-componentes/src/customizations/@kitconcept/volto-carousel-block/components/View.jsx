import React, { useEffect, useCallback, useState } from 'react';
import { Message } from 'semantic-ui-react';
import Slider from 'react-slick';
import teaserHeroTopTemplate from '@kitconcept/volto-carousel-block/icons/teaser-template.svg';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from '@plone/volto/components';

import cx from 'classnames';

import Body from '@kitconcept/volto-carousel-block/components/Body';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import leftArrowSVG from '@plone/volto/icons/left-key.svg';

const messages = defineMessages({
  PleaseChooseContent: {
    id: 'Please choose an existing content as source for this element',
    defaultMessage:
      'Please choose an existing content as source for this element',
  },
});

const PrevArrow = ({ className, style, onClick }) => (
  <button
    icon
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    aria-label="left arrow"
  >
    <Icon name={leftArrowSVG} size="48px" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    icon
    className={className}
    style={{ ...style, display: 'block' }}
    onClick={onClick}
    aria-label="right arrow"
  >
    <Icon name={rightArrowSVG} size="48px" />
  </button>
);

const CarouselView = (props) => {
  const { block, data, isEditMode, openObjectBrowser, onChangeBlock } = props;
  const [mobileSize, setmobileSize] = useState(false);
  const intl = useIntl();
  let noOfSlide = data.items_to_show ?? 4;
  if (data.items_to_show) {
    if (data.items_to_show <= 0) {
      noOfSlide = 1;
    } else if (data.items_to_show > 5) {
      noOfSlide = 5;
    } else {
      noOfSlide = data.items_to_show;
    }
  }

  if (__CLIENT__ && (window.innerWidth < 520 || mobileSize)) {
    noOfSlide = 1;
  }

  const updateNoOfSlide = useCallback(() => {
    if (window.innerWidth < 520) {
      setmobileSize(true);
    } else {
      setmobileSize(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateNoOfSlide);
    return () => window.removeEventListener('resize', updateNoOfSlide);
  }, [updateNoOfSlide]);

  useEffect(() => {
    updateNoOfSlide();
  }, [updateNoOfSlide]);

  return (
    <div
      className={cx('block carousel', {
        'wrapperstyle full': data.useLargeContainer,
      })}
    >
      {(data.columns?.length === 0 || !data.columns) && isEditMode && (
        <Message>
          <div className="teaser-item default">
            <img src={teaserHeroTopTemplate} alt="" />
            <p>{intl.formatMessage(messages.PleaseChooseContent)}</p>
          </div>
        </Message>
      )}
      {data.columns?.length > 0 && (
        <div
          className={cx({ 'full-width': data.useLargeContainer })}
          style={{ backgroundColor: props.data.bg_color }}
        >
          {data.headline && <h2 className="headline">{data.headline}</h2>}
          <Slider
            dots
            infinite={false}
            speed={500}
            slidesToShow={+noOfSlide}
            slidesToScroll={+noOfSlide}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
          >
            {data.columns &&
              data.columns.map((item, index) => (
                <Body
                  key={item['@id']}
                  data={item}
                  isEditMode={isEditMode}
                  dataBlock={data}
                  index={index}
                  block={block}
                  openObjectBrowser={openObjectBrowser}
                  onChangeBlock={onChangeBlock}
                />
              ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default CarouselView;
