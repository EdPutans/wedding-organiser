import { getResult, getError } from '../HEARequest';
import * as actions from './actions';
import * as requests from './requests';

export const getStuff = (itemName, endpoint, search) => dispatch => {
  dispatch(actions.getItemsPending(itemName));
  requests
    .getStuff(endpoint, search)
    .then(r => dispatch(actions.getItemsSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.getItemsError(itemName, getError(r))));
};

export const getItem = (itemName, endpoint, id) => dispatch => {
  dispatch(actions.getItemPending(itemName, id));
  requests
    .getItem(endpoint, id)
    .then(r => dispatch(actions.getItemSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.getItemError(itemName, getError(r))));
};

export const saveStuff = (itemName, endpoint, items) => dispatch => {
  dispatch(actions.saveItemsPending(itemName));
  requests
    .saveStuff(endpoint, items)
    .then(r => dispatch(actions.saveItemsSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.saveItemsError(itemName, getError(r))));
};

export const saveItem = (itemName, endpoint, item) => dispatch => {
  dispatch(actions.saveItemPending(itemName, item.id));
  requests
    .saveItem(endpoint, item)
    .then(r => dispatch(actions.saveItemSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.saveItemError(itemName, getError(r))));
};

export const createItem = (itemName, endpoint, item) => dispatch => {
  dispatch(actions.createItemPending(itemName));
  requests
    .createItem(endpoint, item)
    .then(r => dispatch(actions.createItemSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.createItemError(itemName, getError(r))));
};

export const deleteItem = (itemName, endpoint, id) => dispatch => {
  dispatch(actions.deleteItemPending(itemName, id));
  requests
    .deleteItem(endpoint, id)
    .then(r => dispatch(actions.deleteItemSuccess(itemName, getResult(r))))
    .catch(r => dispatch(actions.deleteItemError(itemName, getError(r))));
};
