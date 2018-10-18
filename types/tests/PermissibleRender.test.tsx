import * as React from 'react'
import { render, } from 'react-dom'
import { PermissibleRender, PermissibleRenderProps, } from '@brainhubeu/react-permissible'

const permissibleRenderTestProps: PermissibleRenderProps = {
  oneperm: false,
  children: 'restricted content',
  userPermissions: ['view'],
  requiredPermissions: ['view'],
  renderOtherwise: 'ACCESS DENIED',
}

render(<PermissibleRender {...permissibleRenderTestProps} />, document.createElement('div'))
