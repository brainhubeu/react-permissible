import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/authActions';
import PropTypes from 'prop-types';

class HomePage extends Component {
  static propTypes = {
    authActions: {
      fetchUsers: PropTypes.func.isRequired,
    },
  };
  componentDidMount() {
    this.props.authActions.fetchUsers();
  }
  render() {
    return (
      <h1>Roles permissions</h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: state.router,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return { authActions: bindActionCreators(authActions, dispatch) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
