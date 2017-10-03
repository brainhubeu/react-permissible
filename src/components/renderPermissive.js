import { Component } from 'react';
import PropTypes from 'prop-types';
import intersection from 'lodash/intersection';

class RenderPermissive extends Component {
  static propTypes = {
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    requiredPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.element.isRequired,
  }
  constructor(props) {
    super(props);
  }

  checkPermissions() {
    const { userPermissions, requiredPermissions } = this.props;
    return intersection(userPermissions, requiredPermissions).length;
  }

  render() {
    if (this.checkPermissions()) {
      return this.props.children;
    }
    return null;
  }
}

export default RenderPermissive;
