import * as React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, /* this is what we're testing */
import { PermissibleRender, PermissibleRenderProps } from '@brainhubeu/react-permissible';

const VIEW_PERMISSION = 'VIEW';

const permissibleRenderTestProps: PermissibleRenderProps = {
  oneperm: false,
  children: 'restricted content',
  userPermissions: [VIEW_PERMISSION],
  requiredPermissions: [VIEW_PERMISSION],
  renderOtherwise: 'ACCESS DENIED',
};

render(<PermissibleRender {...permissibleRenderTestProps} />, document.createElement('div'));
