import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';

import AccessControl from '../src/components/accessControl.hoc';
import AccessedComponent from '../src/components/accessibleComponent.component';

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

chai.use(chaiEnzyme());
chai.should();

describe('AccessControl HOC', () => {
  let mountedComponent;

  // return enzyme's ReactWrapper of AccessControl Higher Order Component
  const renderHOC = (userPermissions, requiredPermissions, callback) => {
    if (!mountedComponent) {
      const AccessibleRoute = AccessControl(
        () => <AccessedComponent/>,
        userPermissions,
        requiredPermissions,
        callback,
      );

      mountedComponent = shallow(
        <AccessibleRoute/>
      );
    }
    return mountedComponent;
  };

  beforeEach(() => {
    mountedComponent = undefined; // eslint-disable-line no-undefined
  });

  it('doesn\'t run a callback function if the permissions are right', () => {
    renderHOC(
      ['MATCHING_PERMISSIONS'],
      ['MATCHING_PERMISSIONS'],
      () => {
        console.log('callback function'); // shouldn't be printed
      });
  });

  it('runs a callback function if the permissions don\'t match', done => {
    renderHOC(
      ['REQUIRED_PERMISSION'],
      ['UNMATCHING_PERMISSION'],
      () => {
        done();
      });
  });
});
