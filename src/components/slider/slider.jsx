import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Slider = ({ images }) => {
  let [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const imagesMaxIndex = images.length === 0 ? 0 : images.length - 1;

  const SliderSnapperBtn = ({ isPrev }) => {
    return (
      <div className='slider__snapper'>
        {isPrev
          ? <button type='button' aria-label='предыдущий слайд' className={activeSlideIndex <= 0
            ? 'slider__snapper-btn slider__snapper-btn--prev slider__snapper-btn--not-active'
            : 'slider__snapper-btn slider__snapper-btn--prev'}
            onClick={() => {
              if (activeSlideIndex <= 0) {
                return false;
              }
              setActiveSlideIndex(--activeSlideIndex);
            }} />
          : <button type='' aria-label='следующий слайд' className={activeSlideIndex >= imagesMaxIndex
            ? 'slider__snapper-btn slider__snapper-btn--next slider__snapper-btn--not-active'
            : 'slider__snapper-btn slider__snapper-btn--next'}
            onClick={() => {
              if (activeSlideIndex >= imagesMaxIndex) {
                return false;
              }
              setActiveSlideIndex(++activeSlideIndex);
            }} />}
      </div>
    );
  };

  return (
    <section className='slider__gallery'>
      <ul className='slider__gallery-list'>
        {images.map(({ alt, id, src }) => {
          return (
            <li key={id}
              className={id === activeSlideIndex ? 'slider__gallery-item' : 'visually-hidden'} >
              <img className='slider__gallery-img' src={src} alt={alt} />
            </li>
          )
        })}
      </ul>
      <div className='slider__wrapper-nav'>
        <SliderSnapperBtn
          isPrev
          setActiveSlideIndex={setActiveSlideIndex}
        />
        <ul className='slider__nav'>
          {images.map(({ alt, id, src }) => {
            return (
              <li key={id}>
                <img className='slider__nav-img' src={src} alt={alt} width='128px' height='80px' />
              </li>
            )
          })}
        </ul>
        <SliderSnapperBtn
          isPrev={false}
          setActiveSlideIndex={setActiveSlideIndex}
        />
      </div>
    </section>
  );
};

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default Slider;
