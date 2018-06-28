# Usage

You can use react-permissible in two ways: as an ordinary component or as a Higher Order Component. Each approach allows you to solve the permission-based rendering a little bit differently.

## Use as an ordinary component with props:
```javascript
import { PermissibleRender } from '@brainhubeu/react-permissible';

...

render() {
  return (
    <PermissibleRender
      userPermissions={permissions}
      requiredPermissions={requiredPermissions}
      renderOtherwise={AnotherComponent} // optional
      oneperm // optional
    >
      <RestrictedComponent/>
    </PermissibleRender>
  );
}
```

Where:

* `userPermissions`: array of permissions set for current user
* `requiredPermissions`: array of required permissions  
* `RestrictedComponent`: component to render  

There are also optional props available:

* `oneperm`: boolean determining that only one of required permissions will be necessary (boolean)
* `renderOtherwise`: another component to be rendered if the permissions do not match (the user isn't permitted).
