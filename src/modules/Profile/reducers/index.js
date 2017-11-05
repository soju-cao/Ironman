import { combineReducers } from 'redux-immutable';
import profile from './profile';
import { PROFILE_REDUCER } from 'constants/storePath';

export default combineReducers({
  [PROFILE_REDUCER]: profile
});
