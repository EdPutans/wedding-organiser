import * as c from './constants';
// fetch all
export const getItemsPending = itemName => ({
  type: c.GET_ITEMS_PENDING(itemName),
  name: itemName,
});
export const getItemsSuccess = (itemName, result) => ({
  type: c.GET_ITEMS_SUCCESS(itemName),
  name: itemName,
  payload: result,
});
export const getItemsError = (itemName, error) => ({
  type: c.GET_ITEMS_ERROR(itemName),
  name: itemName,
  payload: error,
});

// fetch single
export const getItemPending = itemName => ({
  type: c.GET_ITEM_PENDING(itemName),
  name: itemName,
});
export const getItemSuccess = (itemName, result) => ({
  type: c.GET_ITEM_SUCCESS(itemName),
  name: itemName,
  payload: result,
});
export const getItemError = (itemName, error) => ({
  type: c.GET_ITEM_ERROR(itemName),
  name: itemName,
  payload: error,
});

// create single
export const createItemPending = itemName => ({
  type: c.CREATE_ITEM_PENDING(itemName),
  name: itemName,
});
export const createItemSuccess = (itemName, result) => ({
  type: c.CREATE_ITEM_SUCCESS(itemName),
  name: itemName,
  payload: result,
});
export const createItemError = (itemName, error) => ({
  type: c.CREATE_ITEM_ERROR(itemName),
  name: itemName,
  payload: error,
});

// update single
export const saveItemPending = itemName => ({
  type: c.SAVE_ITEMS_PENDING(itemName),
  name: itemName,
});
export const saveItemSuccess = (itemName, result) => ({
  type: c.SAVE_ITEMS_SUCCESS(itemName),
  name: itemName,
  payload: result,
});
export const saveItemError = (itemName, error) => ({
  type: c.SAVE_ITEMS_ERROR(itemName),
  name: itemName,
  payload: error,
});

// update all
export const saveItemsPending = itemName => ({
  type: c.SAVE_ITEMS_PENDING(itemName),
  name: itemName,
});
export const saveItemsSuccess = (itemName, result) => ({
  type: c.SAVE_ITEMS_SUCCESS(itemName),
  name: itemName,
  payload: result,
});
export const saveItemsError = (itemName, error) => ({
  type: c.SAVE_ITEMS_ERROR(itemName),
  name: itemName,
  payload: error,
});

// delete
export const deleteItemsPending = itemName => ({
  type: c.DELETE_ITEMS_PENDING(itemName),
  name: itemName,
});
export const deleteItemsSuccess = (itemName, result) => ({
  type: c.DELETE_ITEMS_SUCCESS(itemName),
  name: itemName,
  payload: result,
});
export const deleteItemsError = (itemName, error) => ({
  type: c.DELETE_ITEMS_ERROR(itemName),
  name: itemName,
  payload: error,
});

export const undoChanges = itemName => ({
  type: c.UNDO_CHANGES,
  payload: itemName,
});
