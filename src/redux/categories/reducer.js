import categoriesShape from './categoriesShape';

const initialState = {
  routes: categoriesShape,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
