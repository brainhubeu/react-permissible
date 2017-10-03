import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intersection from 'lodash/intersection';

function accessControl(
  AccessedComponent,
  userPermissions,
  requiredPermissions,
  callbackFunction,
) {
  class AccessControl extends Component {
    static propTypes = {
      history: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    };

    componentWillMount() {
      this.checkPermissions() || this.runCallback();
    }

    componentWillReceiveProps() {
      this.checkPermissions() || this.runCallback();
    }

    runCallback() {
      if (callbackFunction) {
        return callbackFunction({
          userPermissions,
          requiredPermissions,
        },
        this.props.history);
      }
    }

    checkPermissions() {
      return intersection(userPermissions, requiredPermissions).length;
    }

    render() {
      if (this.checkPermissions()) {
        return <AccessedComponent {...this.props}/>;
      }
      return null;
    }
  }
  return AccessControl;
}

export default accessControl;
