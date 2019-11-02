import * as c from './constants';

const initialState = {
  isMobile: false,
  isDesktop: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.RESIZE_SCREEN:
      return {
        ...state,
        isMobile: action.payload <= 768,
        isDesktop: action.payload > 768,
      };
    default:
      return state;
  }
};
