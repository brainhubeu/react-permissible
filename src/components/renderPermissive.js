import { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class RenderPermissive extends Component {
  static propTypes = {
    userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    requiredPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
    children: PropTypes.element.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      userPermitted: true,
    };
  }

  componentWillMount() {
    this.checkPermissions();
  }

  componentWillReceiveProps() {
    this.checkPermissions();
  }

  checkPermissions() {
    const { userPermissions, requiredPermissions } = this.props;

    if (!_.intersection(userPermissions, requiredPermissions).length) {
      this.setState({
        userPermitted: false,
      });
    }
  }

  render() {
    return this.state.userPermitted && this.props.children;
  }
}

export default RenderPermissive;
