import React from 'react';

const SliderDescription = () => {
  return (
    <section className='slider__description'>
      <h3 className='slider__description-caption'>Марпех 11</h3>
      <ul className='slider__description-list'>
        <li className='slider__description-item slider__description-item--petrol'>бензин</li>
        <li className='slider__description-item slider__description-item--mechanics'>механика</li>
        <li className='slider__description-item slider__description-item--power'>100 л.с.</li>
        <li className='slider__description-item slider__description-item--volume'>1.4 л</li>
      </ul>
      <div className='slider__description-price'>
        <span>2 300 000 ₽</span>
        <img src='/img/price.svg' width='123px' height='28px' alt='Цена'/>
      </div>
      <button className='slider__description-button slider__description-button--bid' type='button' aria-label='оставить заявку'>оставить заявку</button>
      <button className='slider__description-button slider__description-button--credit' type='button' aria-label='в кредит от 11000 руб'>В КРЕДИТ ОТ 11 000 ₽</button>
    </section>
  );
};

export default SliderDescription;
