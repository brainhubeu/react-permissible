import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
      if (!_.intersection(userPermissions, requiredPermissions).length) {
        this.setState({
          userPermitted: false,
        });

        if (callbackFunction) {
          callbackFunction({
            userPermissions,
            requiredPermissions,
          },
          this.props.history);
        }
      }
    }

    render() {
      const { userPermitted } = this.state;
      return (
        userPermitted
        && <AccessedComponent {...this.props}/>
      );
    }
  }
  return AccessControl;
}

export default accessControl;
