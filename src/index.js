import React from 'react';
import { render } from 'react-dom';
import { configureStore, history } from './store/configureStore';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import "./svg";

require('./styles/index.scss');
require('./styles/index.less');

export const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <ConnectedRouter history={ history }>
        <Route path='/' component={ App }/>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
