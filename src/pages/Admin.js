import React, { Component } from 'react';

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

export default Admin;
