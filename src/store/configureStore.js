// import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export const history = createHistory();

export function configureStore (initialState) {
  const middleware = [thunk, routerMiddleware(history)];
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  );
}
