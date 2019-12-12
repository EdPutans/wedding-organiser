import { getResult, getError } from '../HEARequest';
import actions from './actions';

// eslint-disable-next-line import/prefer-default-export
export const getStuff = (itemName, endpoint, search) => dispatch => {
  dispatch(actions.getItemsPending(itemName));
  requestHere(endpoint, search)
    .then(r => dispatch(actions.getItemsSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.getItemsError(itemName, getError(r))));
};

export const getItem = (itemName, endpoint, id, search) => dispatch => {
  dispatch(actions.getItemsPending(itemName));
  requestHere(endpoint, id, search)
    .then(r => dispatch(actions.getItemsSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.getItemsError(itemName, getError(r))));
};

export const saveStuff = (itemName, endpoint, item) => dispatch => {
  dispatch(actions.getItemsPending(itemName));
  requestHere(endpoint, item)
    .then(r => dispatch(actions.getItemsSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.getItemsError(itemName, getError(r))));
};

export const createItem = (itemName, endpoint, item) => dispatch => {
  dispatch(actions.getItemsPending(itemName));
  requestHere(endpoint, item)
    .then(r => dispatch(actions.getItemsSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.getItemsError(itemName, getError(r))));
};
