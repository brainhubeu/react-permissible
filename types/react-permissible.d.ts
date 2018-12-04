import { Component, ComponentState, ComponentType, ReactNode, ReactNodeArray, StaticLifecycle, ValidationMap, } from 'react';

declare module '@brainhubeu/react-permissible' {

  type Permissions = string[];

  type Children = ReactNode | ReactNodeArray;

  export interface UserAndRequiredPermissions {
    userPermissions: Permissions
    requiredPermissions: Permissions
  }

  export interface PermissibleRenderProps extends UserAndRequiredPermissions {
    oneperm?: boolean
    children: Children
    renderOtherwise?: Children
  }

  export class PermissibleRender extends Component<PermissibleRenderProps> {
    checkPermissions(): boolean
  }

  export function Permissible<Props extends object, State extends object>(
    RestrictedComponent: ComponentType<Props>,
    userPermissions: Permissions,
    requiredPermissions: Permissions,
    callbackFunction?: ({ userPermissions, requiredPermissions, }: UserAndRequiredPermissions) => void,
    oneperm?: boolean,
  ): PermissibleHOC<Props, State, { runCallback(): void }>

  interface PermissibleHOC<Props = object, State = ComponentState, TE = object> extends StaticLifecycle<Props, State> {
    new (props: Props, context?: any): Component<Props, State> & TE
    propTypes?: ValidationMap<Props>
    contextTypes?: ValidationMap<any>
    childContextTypes?: ValidationMap<any>
    defaultProps?: Partial<Props>
    displayName?: string
  }
}
