import { Component } from 'react';
import PropTypes from 'prop-types';
import intersection from 'lodash/intersection';
import isSubset from 'is-subset';

export class PermissibleRender extends Component {
  static propTypes = {
    oneperm: PropTypes.bool,
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    requiredPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.element.isRequired,
    renderOtherwise: PropTypes.element,
  }
  constructor(props) {
    super(props);
  }

  checkPermissions() {
    const { userPermissions, requiredPermissions, oneperm } = this.props;

    if (oneperm) {
      return intersection(userPermissions, requiredPermissions).length;
    }
    return isSubset(userPermissions, requiredPermissions);
  }

  render() {
    const { renderOtherwise } = this.props;

    if (this.checkPermissions()) {
      return this.props.children;
    } else if (renderOtherwise) {
      return renderOtherwise;
    }
    return null;
  }
}
