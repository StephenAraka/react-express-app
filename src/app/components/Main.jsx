import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/histoy';
import { saveState } from '../helpers/localStorage';

import Navigation from './Navigation';
import Dashboard from './Dashboard';

// update localstorage whenever state changes
store.subscribe(() => {
  saveState(store.getState());
});


export const Main = () => (
  <Router history={history}>
    <Provider store={store} >
      <div>
        <Navigation />
        <Route
          exact
          path="/dashboard"
          render={() => <Dashboard />}
        />
      </div>
    </Provider>
  </Router>
);
