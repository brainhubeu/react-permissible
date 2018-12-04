import * as React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, /* this is what we're testing */
import { PermissibleRender, PermissibleRenderProps } from '@brainhubeu/react-permissible';

const permissibleRenderTestProps: PermissibleRenderProps = {
  oneperm: false,
  children: 'restricted content',
  userPermissions: ['view'],
  requiredPermissions: ['view'],
  renderOtherwise: 'ACCESS DENIED',
};

render(<PermissibleRender {...permissibleRenderTestProps} />, document.createElement('div'));
