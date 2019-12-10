// import * as actions from './actions';
// import { loginRequest, signupRequest } from './api';
// import { getResult } from '../HEARequest';

export const signIn = userData => dispatch => {
  // dispatch(actions.signInPending());
  // return loginRequest(userData)
  //   .then(r => {
  //     return dispatch(actions.signInSuccess(getResult(r)));
  //   })
  //   .catch(err => {
  //     return dispatch(actions.signInError(err.message));
  //   });
};

export const register = userData => dispatch => {
  // dispatch(actions.registerPending());
  // return signupRequest(userData)
  //   .then(r => getResult(r))
  //   .then(r => dispatch(actions.registerSuccess(getResult(r))))
  //   .catch(err => dispatch(actions.registerError(err.message)));
};
