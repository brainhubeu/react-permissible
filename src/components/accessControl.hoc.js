import React, { Component } from 'react';
import _ from 'lodash';

// @TODO comment this shit
function accessControl(
  AccessedComponent,
  userPermissions,
  neededPermissions,
) {
  return class AccessControl extends Component {
    constructor(props) {
      super(props);

      if (!_.isEmpty(userPermissions)
        && !this.checkPermissions()
      ) {
        console.log('user is not permitted');
      }
    }

    checkPermissions() {
      return _.intersection(userPermissions, neededPermissions).length;
    }

    render() {
      return <AccessedComponent {...this.props}/>;
    }
  };
}

export default accessControl;
