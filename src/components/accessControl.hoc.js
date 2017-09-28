import React, { Component } from 'react';
// import _ from 'lodash';

function accessControl(AccessedComponent, userPermissions, neededPermissions, onFail) {
  return class AccessControl extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount() {
      // const permissionsIntersection = _.intersection(userPermissions, neededPermissions);

      // console.log(permissionsIntersection);
      console.log('hoc');
    }
    render() {
      return <AccessedComponent {...this.props}/>;
    }
  };
}

export default accessControl;
