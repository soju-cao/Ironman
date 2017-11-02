import { combineReducers } from 'redux-immutable';
import error from './error';
import { ERROR_REDUCER } from 'constants/storePath';

export default combineReducers({
  [ERROR_REDUCER]: error
});
