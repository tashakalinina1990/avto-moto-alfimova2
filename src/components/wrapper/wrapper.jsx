import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Promo from '../promo/promo';
import Footer from '../footer/footer';
import Modal from '../modal/modal';

const Wrapper = ({ images }) => {
  return (
    <>
      <Header />
      <Promo images={images} />
      <Footer/>
      <Modal/>
    </>
  );
}

Wrapper.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default Wrapper;
