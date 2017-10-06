import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

import Permissible from '../components/permissible';
import AccessibleComponent from '../components/accessibleComponent.component';
import PermissibleRender from '../components/permissibleRender';

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

    const AccessibleComponentAdmin = Permissible(
      () => <AccessibleComponent permission="ACCESS_ADMIN" />,
      permissions,
      ['ACCESS_ADMIN']
    );

    const AccessibleComponentUser = Permissible(
      () => <AccessibleComponent permission="VIEW_OWN_POST" />,
      permissions,
      ['VIEW_OWN_POST']
    );

    const AccessibleComponentAll = Permissible(
      () => <AccessibleComponent permission="ADD_POSTS" />,
      permissions,
      ['ADD_POSTS']
    );

    const NotAlowedComponent = (
      <div className="accessible-component">
        <p>This component renders if you dont have needed permission as a substitute.</p>
      </div>
    );

    return (
      <Grid>
        <PageHeader>
          Component visibility check
        </PageHeader>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            Current permission set
          </Col>
          <Col xs={12} md={6}>
            <code>
              {permissions.map((permission, key) =>
                `${permission}, `
              )}
            </code>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <h3>Permissible HOC test</h3>
            <AccessibleComponentAdmin />
            <AccessibleComponentUser />
            <AccessibleComponentAll />
          </Col>
          <Col xs={12} md={6}>
            <h3>PermissibleRender test</h3>
            <PermissibleRender
              userPermissions={permissions}
              requiredPermissions={['VIEW_POSTS', 'ACCESS_ADMIN']}
              oneperm
            >
              <AccessibleComponent
                permission="VIEW_POSTS, ACCESS_ADMIN"
                oneperm
              />
            </PermissibleRender>

            <PermissibleRender
              userPermissions={permissions}
              requiredPermissions={['ADD_POSTS', 'VIEW_OWN_POST', 'EDIT_OWN_POST']}
              oneperm
            >
              <AccessibleComponent
                permission="ADD_POSTS, VIEW_OWN_POST, EDIT_OWN_POST"
                oneperm
              />
            </PermissibleRender>

            <PermissibleRender
              userPermissions={permissions}
              requiredPermissions={['ADD_POSTS', 'VIEW_OWN_POST', 'EDIT_OWN_POST']}
              renderOtherwise={NotAlowedComponent}
            >
              <AccessibleComponent
                permission="ADD_POSTS, VIEW_OWN_POST, EDIT_OWN_POST"
              />
            </PermissibleRender>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
  })
)(Admin);
