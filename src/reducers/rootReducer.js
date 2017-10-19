import { combineReducers } from 'redux-immutable';
import { routerReducer as router } from 'react-router-redux';
import { reducers as app } from '../modules/App';

export default combineReducers({
  router,
  app
});
