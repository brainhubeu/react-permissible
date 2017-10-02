import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AccessControl from '../components/accessControl.hoc';
import AccessibleComponent from '../components/accessibleComponent.component';
import RenderPermissive from '../components/renderPermissive';

class Admin extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      fetching: PropTypes.bool,
      users: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string),
      })),
    }),
  }
  render() {
    let permissions = [];
    const { auth } = this.props;
    const { user } = auth;

    if (typeof user !== 'undefined') {
      permissions = user.permissions;
    }

    const AccessibleComponentAdmin = AccessControl(
      () => <AccessibleComponent permission="ACCESS_ADMIN" />,
      permissions,
      ['ACCESS_ADMIN']
    );

    const AccessibleComponentUser = AccessControl(
      () => <AccessibleComponent permission="VIEW_OWN_POST" />,
      permissions,
      ['VIEW_OWN_POST']
    );

    const AccessibleComponentAll = AccessControl(
      () => <AccessibleComponent permission="ADD_POSTS" />,
      permissions,
      ['ADD_POSTS']
    );

    return (
      <div>
        <h1>Visibility check</h1>
        <AccessibleComponentAdmin/>
        <AccessibleComponentUser/>
        <AccessibleComponentAll/>

        <RenderPermissive
          userPermissions={permissions}
          requiredPermissions={['VIEW_POSTS']}
        >
          <div>
            {'RenderPermissive Component example. Only users with VIEW_POSTS permission see it.'}
          </div>
        </RenderPermissive>
      </div>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
  })
)(Admin);
