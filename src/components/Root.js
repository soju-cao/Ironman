import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Dashboard from 'modules/App/containers/Dashboard';
import DevTools from './DevTools';

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <Route path="/" component={Dashboard}/>
        </ConnectedRouter>
        <DevTools />
      </div>
    </Provider>
  );
}
