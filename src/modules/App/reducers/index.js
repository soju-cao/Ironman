import { combineReducers } from 'redux-immutable';
import dashboard from './dashboard';
import story from './story';
import { DASHBOARD_REDUCER, STORY_REDUCER } from 'constants/storePath';

export default combineReducers({
  [DASHBOARD_REDUCER]: dashboard,
  [STORY_REDUCER]: story
});
