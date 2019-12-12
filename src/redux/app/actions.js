import * as c from './constants';

// eslint-disable-next-line import/prefer-default-export
export const screenResizeAction = w => ({
  type: c.RESIZE_SCREEN,
  payload: w,
});

export const signInPending = () => ({
  type: c.SIGN_IN_PENDING,
});
export const signInSuccess = userData => ({
  type: c.SIGN_IN_SUCCESS,
  payload: userData,
});
export const signInError = error => ({
  type: c.SIGN_IN_ERROR,
  payload: error,
});

export const registerPending = () => ({
  type: c.REGISTER_PENDING,
});
export const registerSuccess = userData => ({
  type: c.REGISTER_SUCCESS,
  payload: userData,
});
export const registerError = error => ({
  type: c.REGISTER_ERROR,
  payload: error,
});
