// eslint-disable-next-line import/prefer-default-export
export const getCategories = state => state.categories.routes;
export const getCurrentCategory = (state, endpoint) => {
  const cat =
    state &&
    endpoint &&
    Object.keys(state.categories.routes).find(
      c => state.categories.routes[c].endpoint === endpoint,
    );
  return state.categories.routes[cat];
};

export const getCurrentList = state => state.categories.list;
