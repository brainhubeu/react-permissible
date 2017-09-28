import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchUsers,
  login,
} from '../actions/authActions';
import PropTypes from 'prop-types';
import UsersList from '../components/usersList.component';

class HomePage extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func,
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
          <h1>Roles permissions</h1>
          <UsersList
            users={users}
            login={login}
          />
        </div>
      )
    );
  }
}

export default connect(
  state => ({
    router: state.router,
    auth: state.auth,
  }),
  {
    fetchUsers,
    login,
  }
)(HomePage);
