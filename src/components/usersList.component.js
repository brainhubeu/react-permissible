import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UsersList extends Component {
  static propTypes = {
    selectUser: PropTypes.func,
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
      this.props.selectUser(id);
    };
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user, key) =>
          <a
            style={{ cursor: 'pointer' }}
            onClick={this.handleLogin(user.id)}
            key={key}
          >
            {user.username}<br/>
          </a>
        )}
      </div>
    );
  }
}
