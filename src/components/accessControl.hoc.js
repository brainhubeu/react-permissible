import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import _ from 'lodash';

// @TODO comment how this works
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

    constructor(props) {
      super(props);
    }

    componentWillMount() {
      this.checkPermissions();
    }

    componentWillReceiveProps() {
      this.checkPermissions();
    }

    checkPermissions() {
      if (!_.intersection(userPermissions, requiredPermissions).length) {
        callbackFunction({
          userPermissions,
          requiredPermissions,
        }, this.props.history);
      }
    }

    render() {
      return <AccessedComponent {...this.props}/>;
    }
  }

  return withRouter(AccessControl);
}

export default accessControl;
