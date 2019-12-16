import * as c from './constants';

export const initialState = {
  items: [],
  selectedItem: {},
  updatedItem: {},

  fetching: false,
  fetchingItem: null,
  saving: false,
  savingItem: null,
  crearingItem: null,
  deletingItem: null,

  fetchError: null,
  saveError: null,
  deleteError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.GET_ITEMS_PENDING(action.name):
      return { ...state, fetching: true };
    case c.GET_ITEMS_SUCCESS(action.name):
      return { ...state, fetching: false, items: action.payload };
    case c.GET_ITEMS_ERROR(action.name):
      return { ...state, fetching: false, error: action.payload };

    case c.GET_ITEM_PENDING(action.name):
      return { ...state, fetchingItem: action.payload };
    case c.GET_ITEM_SUCCESS(action.name):
      return { ...state, fetchingItem: false, selectedItem: action.payload };
    case c.GET_ITEM_ERROR(action.name):
      return { ...state, fetchingItem: false, error: action.payload };

    case c.CREATE_ITEM_PENDING(action.name):
      return { ...state, saving: true };
    case c.CREATE_ITEM_SUCCESS(action.name): {
      const items = [...state.items];
      return { ...state, saving: false, items: [...items, action.payload] };
    }
    case c.CREATE_ITEM_ERROR(action.name):
      return { ...state, saving: false, error: action.payload };

    case c.SAVE_ITEMS_PENDING(action.name):
      return { ...state, saving: true };
    case c.SAVE_ITEMS_SUCCESS(action.name):
      return { ...state, saving: false };
    case c.SAVE_ITEMS_ERROR(action.name):
      return { ...state, saving: false, error: action.payload };

    case c.SAVE_ITEM_PENDING(action.name):
      return { ...state, savingItem: action.payload };
    case c.SAVE_ITEM_SUCCESS(action.name):
      return { ...state, savingItem: null };
    case c.SAVE_ITEM_ERROR(action.name):
      return { ...state, savingItem: null, error: action.payload };

    case c.DELETE_ITEM_PENDING(action.name):
      return { ...state, deletingItem: action.payload };
    case c.DELETE_ITEM_SUCCESS(action.name):
      return { ...state, deletingItem: null };
    case c.DELETE_ITEM_ERROR(action.name):
      return { ...state, deletingItem: null, error: action.payload };

    case c.UNDO_CHANGES(action.name):
      return { ...state };

    default:
      return state;
  }
};
