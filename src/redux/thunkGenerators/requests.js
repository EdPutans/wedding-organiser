import HEARequest, { combineQueries } from '../HEARequest';

export const getStuff = (endpoint, search) => HEARequest(`${endpoint}/${combineQueries(search)}`);
export const getItem = (endpoint, id) => HEARequest(`${endpoint}/${id}`);
export const createItem = (endpoint, item) => HEARequest(endpoint, { method: 'POST', body: item });
export const saveItem = (endpoint, item) => HEARequest(endpoint, { method: 'PUT', body: item });
export const saveStuff = (endpoint, items) => HEARequest(endpoint, { method: 'PUT', body: items });
export const deleteItem = (endpoint, id) => HEARequest(`${endpoint}/${id}`);
