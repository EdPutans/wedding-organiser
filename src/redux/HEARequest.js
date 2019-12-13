// TODO: rename HEARequest to something more original

export const objectToQueryParams = queryObject => {
  const queries = [];
  Object.keys(queryObject).forEach(
    item => queryObject[item] && queries.push(`${item}=${queryObject[item]}`),
  );
  return `${queries.join('&')}`;
};

export const defaultHeaders = {
  Accept: 'application/json',
  'content-Type': 'application/json',
};

export default (url, { method, body }, other) =>
  fetch(url, {
    method: method || 'GET',
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders,
      ...other,
    },
  })
    .then(r => r.json())
    .then(r => {
      if (r.status === 202 || r.status === 400) {
        return Promise.reject(r);
      }
      return Promise.resolve(r);
    });

export const getResult = r => (Object.hasOwnProperty.call(r, 'result') ? r.result : r);
export const getError = r => {
  if (r && r.data) {
    return r.data.error && r.data.error.message;
  }
  if (r.message) {
    return r.message;
  }
  return 'Something went wrong, try again :(';
};

export const combineQueries = queryObject => {
  Object.keys(queryObject)
    .map(key => `${key}=${queryObject[key]}`)
    .join('&');
};
