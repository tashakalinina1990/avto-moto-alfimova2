import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setModalVisibility } from '../../store/actions';
import { getReviews } from '../../store/selectors';

const TabReview = ({ isActive, setModalVisibility, reviews }) => {
  const handleButtonClick = () => {
    setModalVisibility(true);
  };

  return (
    <ul className={isActive ? 'block-tabs_content reviews' : 'reviews visually-hidden'}>
      <button type='button' aria-label='оставить отзыв' className='reviews__button' onClick={handleButtonClick}>
        Оставить отзыв
      </button>

      {reviews.map((reviewData, index) => {
        return (
          <Fragment key={index}>
            <li className='reviews__item'>
              <h4>{reviewData.name}</h4>
              <div className='reviews__dignity'>
                <p>Достоинства</p>
                <span>{reviewData.dignity}</span>
              </div>
              <div className='reviews__limitations'>
                <p>Недостатки</p>
                <span>{reviewData.limitations}</span>
              </div>
              <div>
                <p>Комментарий</p>
                <span>{reviewData.reviewText}</span>
              </div>
              <div className='reviews__evaluation'>
                <img src='/img/star.png' alt='Звезды' width='85px' height='24px' />
                <span>Советует</span>
              </div>
              <div className='reviews__time'>
                <span>1 минуту назад</span>
                <button type='button' aria-label='ответить'>Ответить</button>
              </div>
            </li>
          </Fragment>
        )
      })}

      <li className='reviews__item'>
        <h4>Борис Иванов</h4>
        <div className='reviews__dignity'>
          <p>Достоинства</p>
          <span>мощность, внешний вид</span>
        </div>
        <div className='reviews__limitations'>
          <p>Недостатки</p>
          <span>Слабые тормозные колодки (пришлось заменить)</span>
        </div>
        <div>
          <p>Комментарий</p>
          <span>Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</span>
        </div>
        <div className='reviews__evaluation'>
          <img src='/img/star.png' alt='Звезды' width='85px' height='24px' />
          <span>Советует</span>
        </div>
        <div className='reviews__time'>
          <span>1 минуту назад</span>
          <button type='button' aria-label='ответить'>Ответить</button>
        </div>
      </li>

      <li className='reviews__item'>
        <h4>Марсель Исмагилов</h4>
        <div className='reviews__dignity'>
          <p>Достоинства</p>
          <span>Cтиль, комфорт, управляемость</span>
        </div>
        <div className='reviews__limitations'>
          <p>Недостатки</p>
          <span>Дорогой ремонт и обслуживание</span>
        </div>
        <div>
          <p>Комментарий</p>
          <span>Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</span>
        </div>
        <div className='reviews__evaluation'>
          <img src='/img/star.png' alt='Звезды' width='85px' height='26px' />
          <span>Советует</span>
        </div>
        <div className='reviews__time'>
          <span>1 минуту назад</span>
          <button type='button' aria-label='ответить'>Ответить</button>
        </div>
      </li>
    </ul>
  );
}

TabReview.propTypes = {
  isActive: PropTypes.bool,
  reviews: PropTypes.arrayOf(PropTypes.object),
  setModalVisibility: PropTypes.func,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = {
  setModalVisibility,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabReview);
