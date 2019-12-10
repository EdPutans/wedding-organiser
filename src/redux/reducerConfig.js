import { combineReducers, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './app/reducer';
import categoryReducer from './categories/reducer';

export default initialState => {
  const reducers = combineReducers({
    app: mainReducer,
    categories: categoryReducer,
  });

  const middleware = [thunkMiddleware];

  const { createLogger } = require('redux-logger');

  middleware.push(createLogger());
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));
};
