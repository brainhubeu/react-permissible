import React from 'react';
import { mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { JSDOM } from 'jsdom';

import RenderPermissive from '../src/components/renderPermissive';

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;

chai.use(chaiEnzyme());
chai.should();

describe('RenderPermissive', () => {
  let props;
  let mountedRenderPermissive;

  const ChildComponent = () => (
    <div>
      {'Child component'}
    </div>
  );

  // return enzyme's ReactWrapper of RenderPermissive Component
  const renderPermissive = () => {
    if (!mountedRenderPermissive) {
      mountedRenderPermissive = mount(
        <RenderPermissive {...props}>
          <ChildComponent/>
        </RenderPermissive>
      );
    }
    return mountedRenderPermissive;
  };

  // clear props before each test
  beforeEach(() => {
    props = {
      userPermissions: [],
      requiredPermimissions: [],
    };
    mountedRenderPermissive = undefined; // eslint-disable-line no-undefined
  });

  it('doesn\'t render a <div /> if there are no props', () => {
    const component = renderPermissive().find('div');
    component.length.should.be.equal(0);
  });

  it('doesn\'t render a <div /> if there is a permission mismatch', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['ANOTHER_PERMISSION'],
    };
    const component = renderPermissive().find('div');
    component.length.should.be.equal(0);
  });

  it('always renders a <div /> if the user has required permission', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['REQUIRED_PERMISSION'],
    };
    const component = renderPermissive().find('div');
    component.length.should.be.greaterThan(0);
  });

  it('doesn\'t render a ChildComponent if there are no props', () => {
    const component = renderPermissive().find('ChildComponent');
    component.length.should.be.equal(0);
  });

  it('doesn\'t render a ChildComponent if there is a permission mismatch', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['ANOTHER_PERMISSION'],
    };
    const component = renderPermissive().find('ChildComponent');
    component.length.should.be.equal(0);
  });

  it('always renders a ChildComponent if the user has required permission', () => {
    props = {
      userPermissions: ['REQUIRED_PERMISSION'],
      requiredPermissions: ['REQUIRED_PERMISSION'],
    };
    const component = renderPermissive().find('ChildComponent');
    component.length.should.be.greaterThan(0);
  });
});
