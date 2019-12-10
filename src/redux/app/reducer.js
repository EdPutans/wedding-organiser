import * as c from './constants';

const initialState = {
  isMobile: false,
  isDesktop: false,
  loggingIn: false,
  signUpError: null,
  signInError: null,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.RESIZE_SCREEN:
      return {
        ...state,
        isMobile: action.payload <= 768,
        isDesktop: action.payload > 768,
      };

    case c.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case c.SIGN_IN_PENDING: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case c.SIGN_IN_ERROR: {
      return {
        ...state,
        signInError: action.payload,
      };
    }

    case c.REGISTER_SUCCESS:
      return {
        ...state,
        // user: action.payload,
      };
    case c.REGISTER_PENDING: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case c.REGISTER_ERROR: {
      return {
        ...state,
        signUpError: action.payload,
      };
    }
    default:
      return state;
  }
};
