import { combineReducers } from 'redux';
import mainReducer from './mainPage/reducer';

export default combineReducers({
  app: mainReducer,
});
