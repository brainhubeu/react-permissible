import React, { Component } from 'react';
import PropTypes from 'prop-types';
import intersection from 'lodash/intersection';
import isSubset from 'is-subset';

function permissible(
  RestrictedComponent,
  userPermissions,
  requiredPermissions,
  callbackFunction,
) {
  class Permissible extends Component {
    static propTypes = {
      oneperm: PropTypes.bool,
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
      const { oneperm } = this.props;

      if (oneperm) {
        return intersection(userPermissions, requiredPermissions).length;
      }
      return isSubset(userPermissions, requiredPermissions);
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
