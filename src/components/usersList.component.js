import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UsersList extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })),
  };

  render() {
    const { users } = this.props;

    return (
      <ul>
        {users.map((user, key) =>
          <li key={key}>{user.username}</li>
        )}
      </ul>
    );
  }
}
