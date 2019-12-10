import HEARequest from '../HEARequest';

export const loginRequest = user =>
  HEARequest('http://localhost:5000/api/users/login', {
    method: 'POST',
    body: user,
  });

export const signupRequest = user => dispatch =>
  dispatch(
    HEARequest('http://localhost:5000/api/users/signup', {
      method: 'POST',
      body: user,
    }),
  );
