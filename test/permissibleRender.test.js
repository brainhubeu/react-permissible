import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';

import { PermissibleRender } from '../src/components/permissibleRender';

const should = chai.should();

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

chai.use(chaiEnzyme());
chai.should();

describe('PermissibleRender', () => {
  const ChildComponent = () => (
    <div>
      Child component
    </div>
  );

  const NotAllowedComponent = () => (
    <div>
      Not allowed component
    </div>
  );

  it('doesn\'t render a <ChildComponent /> if `userPermissions` prop is not set', () => {
    const props = {
      requiredPermissions: [],
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.equal(0);
  });

  it('doesn\'t render a <ChildComponent /> if `requiredPermissions` prop is not set', () => {
    const props = {
      userPermissions: [],
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.equal(0);
  });

  it('renders nothing if `children` prop is not set', () => {
    const props = {
      userPermissions: [],
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>

      </PermissibleRender>
    );

    should.not.exist(mountedComponent.find('PermissibleRender').html());
  });

  it('renders a <ChildComponent /> if user permissions and required permissions are both empty', () => {
    const props = {
      userPermissions: [],
      requiredPermissions: [],
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.equal(1);
  });

  it('doesn\'t render a <ChildComponent /> if there is a permission mismatch', () => {
    const props = {
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

  it('renders a <ChildComponent /> if the user has required permission', () => {
    const props = {
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

  it('renders a NotAllowedCOmponent if the user doesn\'t have required permissions and renderOtherwise is given', () => {
    const props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['NOT_REQUIRED_PERMISSION'],
      renderOtherwise: <NotAllowedComponent />,
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <NotAllowedComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('NotAllowedComponent');
    searchedElement.length.should.be.greaterThan(0);
  });

  it('renders a component if the user has one of necessary conditions when `oneperm` prop is defined', () => {
    const props = {
      userPermissions: ['ANOTHER_PERMISSION'],
      requiredPermissions: ['REQUIRED_PERMISSION', 'ANOTHER_PERMISSION'],
      oneperm: true,
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.greaterThan(0);
  });

  it('doesn\'t render a component if the user doesn\'t have all of necessary permissions when `oneperm` prop is explicitely set to false', () => {
    const props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['REQUIRED_PERMISSION', 'ANOTHER_PERMISSION'],
      oneperm: false,
    };

    const mountedComponent = mount(
      <PermissibleRender {...props}>
        <ChildComponent />
      </PermissibleRender>
    );

    const searchedElement = mountedComponent.find('ChildComponent');
    searchedElement.length.should.be.equal(0);
  });
});
