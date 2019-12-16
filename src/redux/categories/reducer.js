import categoriesShape from './categoriesShape';

export const componentTypes = {
  LIST: 'list',
  SUBCATEGORY: 'subCategory',
};

const initialState = {
  routes: categoriesShape,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
