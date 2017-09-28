import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin panel</h1>
        <p>Only ACCESS_ADMIN-enabled users can go there</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    router: state.router,
    auth: state.auth,
  })
)(Admin);
