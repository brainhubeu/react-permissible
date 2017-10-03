import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';

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
      <Grid>
        <PageHeader>Component visibility check</PageHeader>
        <Row className="show-grid">
          <Col xs={12} md={6}>
            <AccessibleComponentAdmin />
            <AccessibleComponentUser />
            <AccessibleComponentAll />
          </Col>
          <Col xs={12} md={6}>
            <RenderPermissive
              userPermissions={permissions}
              requiredPermissions={['VIEW_POSTS']}
            >
              <div>
                {'RenderPermissive Component example. Users with VIEW_POSTS permission can see it.'}
              </div>
            </RenderPermissive>
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
