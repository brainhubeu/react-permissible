import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AccessibleItem extends Component {
  static propTypes = {
    permission: PropTypes.string,
  };

  render() {
    const { permission } = this.props;
    return (
      <p>Only users with {permission} permission can see this.</p>
    );
  }
}
