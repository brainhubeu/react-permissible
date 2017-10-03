import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import {
  fetchUsers,
  login,
} from '../actions/authActions';
import UsersList from '../components/usersList.component';
import NotificationModal from '../components/notificationModal.component';

class HomePage extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    login: PropTypes.func,
    auth: PropTypes.shape({
      fetching: PropTypes.bool,
      users: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        permissions: PropTypes.arrayOf(PropTypes.string),
      })),
    }),
  };
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    const { auth, login } = this.props;
    const { fetching, users } = auth;

    return (
      !fetching && (
        <div>
          <Grid>
            <PageHeader>roles-permission</PageHeader>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                <h2>Example user selector</h2>
                <UsersList
                  users={users}
                  login={login}
                />
              </Col>
              <Col xs={12} md={6}>
                <h2>Navigation</h2>
                <Link to={'/admin'}>{'Restricted page (Requires ADMIN_ACCESS permission)'}</Link><br />
                <Link to={'/visibility-check'}>{'Component visibility check'}</Link>
              </Col>
            </Row>
          </Grid>
          <NotificationModal/>
        </div>

      )
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
    view: state.view,
  }),
  {
    fetchUsers,
    login,
  }
)(HomePage);
