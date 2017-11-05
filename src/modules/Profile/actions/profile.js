import * as ActionType from '../ActionTypes';
import * as API from '../api';

export function getPublicKey (params) {
  return async (dispatch) => {
    // Returns a promise
    return await API.getPublicKey(params)
      .then(response => {
        dispatch( {
          type: ActionType.GET_PUBLIC_KEY,
          response
        });
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function login (params) {
  return async (dispatch) => {
    // Returns a promise
    return await API.login(params)
      .then(response => {
        dispatch( {
          type: ActionType.LOGIN,
          response
        });
      })
      .catch(error => {
        throw (error);
      });
  };
}

export function register (params) {
  return async (dispatch) => {
    // Returns a promise
    return await API.register(params)
      .then(response => {
        dispatch( {
          type: ActionType.REGISTER,
          response
        });
      })
      .catch(error => {
        throw (error);
      });
  };
}
