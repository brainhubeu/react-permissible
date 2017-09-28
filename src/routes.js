import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from 'containers/App';
import Admin from 'pages/Admin';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage.js';
import AccessControl from './components/accessControl.hoc';

class Routes extends Component {
  render() {
    const accessibleAdmin = AccessControl(Admin, null, ['ACCESS_ADMIN']);

    return (
      <ConnectedRouter history={createHistory()}>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={accessibleAdmin} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </App>
      </ConnectedRouter>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
  })
)(Routes);

