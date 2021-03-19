import * as actionTypes from './actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_MODAL_VISIBILITY]:  (state, { isVisible }) => ({
    ...state,
    isModalVisible: isVisible,
  }),
  [actionTypes.UPDATE_REVIEWS]:  (state, { newReviews }) => ({
    ...state,
    reviews: newReviews,
  }),
};

const initialState = {
  isModalVisible: false,
  reviews: [],
}

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
