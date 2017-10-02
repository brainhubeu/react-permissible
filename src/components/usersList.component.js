import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UsersList extends Component {
  static propTypes = {
    login: PropTypes.func,
    users: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      permissions: PropTypes.arrayOf(PropTypes.string),
    })),
  };
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(id) {
    return () => {
      this.props.login(id);
    };
  }

  render() {
    const { users } = this.props;
    return (
      <ul>
        {users.map((user, key) =>
          <li
            key={key}
            onClick={this.handleLogin(user.id)}
          >
            {user.username}
          </li>
        )}
      </ul>
    );
  }
}
