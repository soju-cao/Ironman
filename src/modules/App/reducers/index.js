import { combineReducers } from 'redux-immutable';
import dashboard from './dashboard';
import story from './story';
import profile from './profile';
import error from '../../Common/reducers/error';
import { DASHBOARD_REDUCER, STORY_REDUCER, PROFILE_REDUCER, ERROR_REDUCER } from 'constants/storePath';

export default combineReducers({
  [DASHBOARD_REDUCER]: dashboard,
  [STORY_REDUCER]: story,
  [PROFILE_REDUCER]: profile,
  [ERROR_REDUCER]:error
});
