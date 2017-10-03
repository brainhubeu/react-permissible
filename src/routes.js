import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';

import App from 'containers/App';
import Admin from 'pages/Admin';
import VisibilityCheck from 'pages/VisibilityCheck';
import HomePage from 'pages/HomePage';
import NotFoundPage from 'pages/NotFoundPage.js';
import AccessControl from './components/accessControl.hoc';
import {
  showModal,
} from './actions/viewActions';

class Routes extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      user: PropTypes.shape({
        username: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string),
      }),
    }),
    showModal: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
  }
  render() {
    let permissions = [];

    const { auth, showModal } = this.props;
    const { user } = auth;

    if (typeof user !== 'undefined') {
      permissions = user.permissions;
    }

    function adminCallback({ userPermissions, requiredPermissions }, history) {
      history.replace('/');

      showModal(
        'Permission denied',
        'You don\'t have sufficient permissions to visit this page.'
      );
    }

    const accessibleAdmin = AccessControl(
      Admin,
      permissions,
      ['ACCESS_ADMIN'],
      adminCallback
    );

    return (
      <ConnectedRouter history={this.history}>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/admin" component={accessibleAdmin} />
            <Route exact path="/visibility-check" component={VisibilityCheck} />
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
    view: state.view,
  }),
  {
    showModal,
  }
)(Routes);
