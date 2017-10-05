import React from 'react';
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';

import { Permissible } from '../src/components/permissible';
import AccessedComponent from '../example/components/accessibleComponent.component';

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

chai.use(chaiEnzyme());
chai.should();

describe('Permissible HOC', () => {
  it('doesn\'t run a callback function if the permissions are right', done => {
    let err = null;

    const AccessibleRoute = Permissible(
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
    const AccessibleRoute = Permissible(
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
