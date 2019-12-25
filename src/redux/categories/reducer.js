import categoriesShape, { listShape } from './categoriesShape';
// import { CLEAR_LIST_ACTION } from './constants';

const initialState = {
  routes: categoriesShape,
  list: listShape,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case CLEAR_LIST_ACTION:
    //   return {
    //     ...state,
    //     list: [],
    //   };
    default:
      return state;
  }
};
