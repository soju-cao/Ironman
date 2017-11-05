import { combineReducers } from 'redux-immutable';
import { routerReducer as router } from 'react-router-redux';
import { reducers as app } from '../modules/App';
import { reducers as common } from '../modules/Common';
import { reducers as profile } from '../modules/Profile';

export default combineReducers({
  router,
  app,
  profile,
  common
});
