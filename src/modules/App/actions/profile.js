import * as ActionType from '../ActionTypes';
import * as API from '../api';

export function getPublicKey (params) {
  return async (dispatch) => {
    // Returns a promise
    return await API.getPublicKey(params)
      .then(response => {
        dispatch( {
          type: ActionType.GET_APP_DETAILS,
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
