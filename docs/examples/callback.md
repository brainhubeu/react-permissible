# Callback function

**react-permissible** allows to run a callback function whenever the conditions are not met. 



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
