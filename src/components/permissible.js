import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intersection from 'lodash/intersection';

function permissible(
  RestrictedComponent,
  userPermissions,
  requiredPermissions,
  callbackFunction,
) {
  class Permissible extends Component {
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
        return <RestrictedComponent {...this.props}/>;
      }
      return null;
    }
  }
  return Permissible;
}

export default permissible;
