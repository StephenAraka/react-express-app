import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { Router, Route } from 'react-router-dom';
import { history } from '../store/histoy';

import Navigation from './Navigation';
import Dashboard from './Dashboard';

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

)