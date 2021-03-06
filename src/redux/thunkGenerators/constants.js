// fetch all
export const GET_ITEMS_PENDING = items => `GET_ITEMS_PENDING_${items}`;
export const GET_ITEMS_SUCCESS = items => `GET_ITEMS_SUCCESS_${items}`;
export const GET_ITEMS_ERROR = items => `GET_ITEMS_ERROR_${items}`;
// fetch single
export const GET_ITEM_PENDING = items => `GET_ITEM_PENDING_${items}`;
export const GET_ITEM_SUCCESS = items => `GET_ITEM_SUCCESS_${items}`;
export const GET_ITEM_ERROR = items => `GET_ITEM_ERROR_${items}`;
// create single
export const CREATE_ITEM_PENDING = items => `CREATE_ITEM_PENDING_${items}`;
export const CREATE_ITEM_SUCCESS = items => `CREATE_ITEM_SUCCESS_${items}`;
export const CREATE_ITEM_ERROR = items => `CREATE_ITEM_ERROR_${items}`;
// update all
export const SAVE_ITEMS_PENDING = items => `SAVE_ITEMS_PENDING_${items}`;
export const SAVE_ITEMS_SUCCESS = items => `SAVE_ITEMS_SUCCESS_${items}`;
export const SAVE_ITEMS_ERROR = items => `SAVE_ITEMS_ERROR_${items}`;
// update single
export const SAVE_ITEM_PENDING = item => `SAVE_ITEM_PENDING_${item}`;
export const SAVE_ITEM_SUCCESS = item => `SAVE_ITEM_SUCCESS_${item}`;
export const SAVE_ITEM_ERROR = item => `SAVE_ITEM_ERROR_${item}`;
// delete
export const DELETE_ITEM_PENDING = items => `DELETE_ITEM_PENDING_${items}`;
export const DELETE_ITEM_SUCCESS = items => `DELETE_ITEM_SUCCESS_${items}`;
export const DELETE_ITEM_ERROR = items => `DELETE_ITEM_ERROR_${items}`;
// other
export const UNDO_CHANGES = item => `UNDO_CHANGES_${item}`;
