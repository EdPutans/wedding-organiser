import * as c from './constants';

export const initialState = {
  items: [],
  selectedItem: {},
  updatedItem: {},

  fetching: false,
  saviing: false,
  deleting: false,

  fetchError: null,
  saveError: null,
  deleteError: null,
};

export default (state = initialState, action) => {
  // action: { type: ..., name: ..., payload: ... }
  switch (action.type) {
    default:
      return state;
  }
};
