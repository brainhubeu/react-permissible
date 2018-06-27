# Usage

You can use react-permissible in two ways. As an ordinary component and as a Higher Order Component. Both approaches allow you to solve the permission-based rendering a little bit differently.

## Usage as a Higher Order Component:
```javascript
import { Permissible } from '@brainhubeu/react-permissible';

...

function callbackFunction({ userPermissions, requiredPermissions }) {
  // do something
}

const RestrictedComponent = (
  <p>Restricted component</p>
);

const PermissibleComponent = Permissible(
  RestrictedComponent,
  userPermissions,
  requiredPermissions,
  callbackFunction,
  oneperm,
);

render() {
  <PermissibleComponent />
}
```

Where:

* `RestrictedComponent`: a component to render
* `userPermissions`: an array of permissions set for current user
* `requiredPermissions`: an array of required permissions
There are also optional props available:

* `oneperm`: boolean determining that only one of required permissions will be necessary instead of requiring all passed permissions (default)
* `renderOtherwise`: another component to be rendered if the permissions do not match (the user isn't permitted).
