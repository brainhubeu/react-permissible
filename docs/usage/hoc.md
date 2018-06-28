# Usage

You can use react-permissible in two ways: as an ordinary component or as a Higher Order Component. Each approach allows you to solve the permission-based rendering a little bit differently.


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
* `oneperm`: boolean determining that only one of required permissions will be necessary instead of requiring all passed permissions (optional)
