import * as actionTypes from './actionTypes'

export const setModalVisibility = (isVisible) => ({
  type: actionTypes.SET_MODAL_VISIBILITY,
  isVisible: isVisible,
});

export const updateReviews = (newReviews) => ({
  type: actionTypes.UPDATE_REVIEWS,
  newReviews: newReviews,
});
