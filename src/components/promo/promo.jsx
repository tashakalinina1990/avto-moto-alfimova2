import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../slider/slider';
import SliderDescription from '../slider-description/slider-description';
import TabMenu from '../tab-menu/tab-menu';

const Promo = ({ images }) => {
  return (
    <main>
      <section className='container slider'>
        <Slider images={images} />
        <SliderDescription />
      </section>
      <TabMenu />
    </main>
  );
}

Promo.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default Promo;
