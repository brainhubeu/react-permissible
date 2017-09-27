import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from 'actions/authActions';
import PropTypes from 'prop-types';

class HomePage extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func,
  };
  componentWillMount() {
    this.props.fetchUsers();
  }
  render() {
    return (
      <h1>Roles permissions</h1>
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
  }
)(HomePage);
