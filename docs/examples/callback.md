# Callback function

Callback function passed to `Permissible` Higher Order Component will be called whenever the permissions do not match. This might be combined with `oneperm` parameter. **Open the Console** to see a callback message. 

```javascript
import { Permissible } from '@brainhubeu/react-permissible';

...

const callbackFunction = ({ userPermissions, requiredPermissions }) => {
  console.log(`
    react-permissible: Access Denied
    userPermissions: ${userPermissions}
    requiredPermissions: ${requiredPermissions}
  `);
};

const CallbackComponent = Permissible(
  AccessGranted,
  ['ACCESS_DASHBOARD'], // userPermissions
  ['ACCESS_ADMIN'], // requiredPermissions
  callbackFunction,
);
```

```jsx render
<CallbackComponent />
```
