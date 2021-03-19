import React from 'react';
import PropTypes from 'prop-types';

const TabSpecification = ({ isActive }) => {
  return (
      <ul className= {isActive ? 'block-tabs_content specification' : 'specification visually-hidden'}>
        <li className='specification__item'>
          <span className='specification__type'>Трансмиссия</span>
          <span className='specification__text'>Роботизированная</span>
        </li>
        <li className='specification__item'>
          <span className='specification__type'>Мощность двигателя, л.с.</span>
          <span className='specification__text'>249</span>
        </li>
        <li className='specification__item'>
          <span className='specification__type'>Тип двигателя</span>
          <span className='specification__text'>Бензиновый</span>
        </li>
        <li className='specification__item'>
          <span className='specification__type'>Привод</span>
          <span className='specification__text'>Полный</span>
        </li>
        <li className='specification__item'>
          <span className='specification__type'>Объем двигателя, л</span>
          <span className='specification__text'>2.4</span>
        </li>
        <li className='specification__item'>
          <span className='specification__type'>Макс. крутящий момент</span>
          <span className='specification__text'>370/4500</span>
        </li>
        <li className='specification__item'>
          <span className='specification__type'>Количество цилиндров</span>
          <span className='specification__text'>4</span>
        </li>
      </ul>
  );
}

TabSpecification.propTypes = {
  isActive: PropTypes.bool,
};

export default TabSpecification;
