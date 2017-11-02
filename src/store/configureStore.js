// import createHistory from 'history/createBrowserHistory';
import createHistory from 'history/createHashHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { toImmutable } from 'utils/immutableHelpers';
import DevTools from '../containers/DevToolsWindow';
export const history = createHistory();

const INITIAL_STATE = toImmutable({
});

export function configureStore (initialState = INITIAL_STATE) {
  const middleware = [thunk, routerMiddleware(history)];
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )
  );
}

export const store = configureStore();
