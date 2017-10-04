import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';

import AccessControl from '../src/components/permissible';
import AccessedComponent from '../src/components/accessibleComponent.component';

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

chai.use(chaiEnzyme());
chai.should();

describe('AccessControl HOC', () => {
  it('doesn\'t run a callback function if the permissions are right', done => {
    let err = null;

    const AccessibleRoute = AccessControl(
      () => <AccessedComponent />,
      ['MATCHING_PERMISSIONS'],
      ['MATCHING_PERMISSIONS'],
      () => {
        err = new Error('Callback function called.');
      }
    );

    shallow(
      <AccessibleRoute />
    );

    done(err);
  });

  it('runs a callback function if the permissions don\'t match', done => {
    const AccessibleRoute = AccessControl(
      () => <AccessedComponent />,
      ['MATCHING_PERMISSIONS'],
      ['UNMATCHING_PERMISSIONS'],
      () => {
        done();
      }
    );

    shallow(
      <AccessibleRoute/>
    );
  });
});
