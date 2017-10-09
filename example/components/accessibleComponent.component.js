import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AccessibleItem extends Component {
  static propTypes = {
    permission: PropTypes.string,
    oneperm: PropTypes.bool,
  };

  render() {
    const { permission, oneperm } = this.props;
    return (
      <div className="accessible-component">
        <p>
          {oneperm ? 'One of' : 'Whole set of'} <code>{permission}</code> is necessary to see this component.
        </p>
      </div>
    );
  }
}
