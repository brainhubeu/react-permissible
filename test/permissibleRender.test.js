import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';

import { PermissibleRender } from '../src/components/permissibleRender';

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

chai.use(chaiEnzyme());
chai.should();

describe('PermissibleRender', () => {
  let props;

  const ChildComponent = () => (
    <div>
      {'Child component'}
    </div>
  );

  // clear props before each test
  beforeEach(() => {
    props = {
      userPermissions: [],
      requiredPermimissions: [],
    };
  });

  it('doesn\'t render a <div /> if there are no props', () => {
    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('div');
    searchedElement.length.should.be.equal(0);
  });

  it('doesn\'t render a <div /> if there is a permission mismatch', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['ANOTHER_PERMISSION'],
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('div');
    searchedElement.length.should.be.equal(0);
  });

  it('always renders a <div /> if the user has required permission', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['REQUIRED_PERMISSION'],
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('div');
    searchedElement.length.should.be.greaterThan(0);
  });

  it('doesn\'t render a ChildComponent if there are no props', () => {
    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.equal(0);
  });

  it('doesn\'t render a ChildComponent if there is a permission mismatch', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['ANOTHER_PERMISSION'],
    };
    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.equal(0);
  });

  it('always renders a ChildComponent if the user has required permission', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['REQUIRED_PERMISSION'],
    };
    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.greaterThan(0);
  });
});
