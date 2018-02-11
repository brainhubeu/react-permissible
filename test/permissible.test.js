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

  it('doesn\'t run a callback function if `requiredPermissions` and `userPermissions` are both empty', done => {
    let err = null;

    const AccessibleRoute = Permissible(
      () => <AccessedComponent />,
      [],
      [],
      () => {
        err = new Error('Callback function called.');
      }
    );

    shallow(
      <AccessibleRoute />
    );

    done(err);
  });

  it('doesn\'t run a callback function if only `requiredPermissions` are empty', done => {
    let err = null;

    const AccessibleRoute = Permissible(
      () => <AccessedComponent />,
      ['SOME_PERMISSION'],
      [],
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

  it('doesn\'t run a callback function if the user has one of necessary permissions and `oneperm` is `true`', done => {
    let err = null;

    const AccessibleRoute = Permissible(
      () => <AccessedComponent/>,
      ['REQUIRED_PERMISSION'],
      ['REQUIRED_PERMISSION', 'ANOTHER_PERMISSION'],
      () => {
        err = new Error('Callback function called.');
      },
      true,
    );

    shallow(
      <AccessibleRoute />
    );

    done(err);
  });

  it('runs a callback function if the user has one of necessary permissions and `oneperm` is `false`', done => {
    const AccessibleRoute = Permissible(
      () => <AccessedComponent />,
      ['REQUIRED_PERMISSION'],
      ['REQUIRED_PERMISSION', 'ANOTHER_PERMISSION'],
      () => {
        done();
      },
      false,
    );

    shallow(
      <AccessibleRoute />
    );
  });

  it('doesn\'t run a callback function if it is not defined', done => {
    const AccessibleRoute = Permissible(
      () => <AccessedComponent />,
      ['REQUIRED_PERMISSION'],
      ['REQUIRED_PERMISSION', 'ANOTHER_PERMISSION'],
      null,
      false,
    );

    shallow(
      <AccessibleRoute />
    );

    done();
  });
});
