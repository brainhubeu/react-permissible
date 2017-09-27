import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from 'containers/App';
import Admin from 'pages/Admin';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage.js';

export default (
  <ConnectedRouter history={createHistory()}>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/admin" component={Admin} permissionAllowed="['ALLOW_ADMIN']"/>
        <Route path="*" component={NotFoundPage}/>
      </Switch>
    </App>
  </ConnectedRouter>
);
