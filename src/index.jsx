import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import '../assets/stylesheets/application.scss';

// Minimal placeholder reducer so the store has a valid reducer to start with.
const placeholder = (state = {}) => state;

const reducers = combineReducers({
  app: placeholder
});

const middlewares = applyMiddleware(reduxPromise, logger);
const history = createBrowserHistory();

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        TODO
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
