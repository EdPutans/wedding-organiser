import * as c from './constants';

// eslint-disable-next-line import/prefer-default-export
export const screenResizeAction = w => ({
  type: c.RESIZE_SCREEN,
  payload: w,
});
