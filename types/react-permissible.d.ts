import * as React from 'react'

declare module '@brainhubeu/react-permissible' {

  type Permissions = string[]

  type Children = React.ReactNode | React.ReactNodeArray

  export interface UserAndRequiredPermissions {
    userPermissions: Permissions
    requiredPermissions: Permissions
  }

  export interface PermissibleRenderProps extends UserAndRequiredPermissions {
    oneperm?: boolean
    children: Children
    renderOtherwise?: Children
  }

  export class PermissibleRender extends React.Component<PermissibleRenderProps> {
    checkPermissions(): boolean
  }

  class PermissibleHOC<P> extends React.Component<P> {
    runCallback(): void
    render(): React.ComponentType<P> | null
  }

  export function Permissible<P extends object>(
    RestrictedComponent: React.ComponentType<P>,
    userPermissions: Permissions,
    requiredPermissions: Permissions,
    callbackFunction?: ({ userPermissions, requiredPermissions, }: UserAndRequiredPermissions) => void,
    oneperm?: boolean,
  ): PermissibleHOC<P>
}
