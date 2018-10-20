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

  export function Permissible<Props extends object, State extends object>(
    RestrictedComponent: React.ComponentType<Props>,
    userPermissions: Permissions,
    requiredPermissions: Permissions,
    callbackFunction?: ({ userPermissions, requiredPermissions, }: UserAndRequiredPermissions) => void,
    oneperm?: boolean,
  ): PermissibleHOC<Props, State, { runCallback(): void }>

  interface PermissibleHOC<Props = {}, State = React.ComponentState, TE = {}> extends React.StaticLifecycle<Props, State> {
    new (props: Props, context?: any): React.Component<Props, State> & TE
    propTypes?: React.ValidationMap<Props>
    contextTypes?: React.ValidationMap<any>
    childContextTypes?: React.ValidationMap<any>
    defaultProps?: Partial<Props>
    displayName?: string
  }
}
