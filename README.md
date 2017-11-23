# react-permissible

> Making the permission management for React components easier.

[![CircleCI](https://circleci.com/gh/brainhubeu/react-permissible.svg?style=svg)](https://circleci.com/gh/brainhubeu/react-permissible)

`react-permissible` is a React Component allowing to:
* manage visibility of particular components depending on user's permissions
* replacing particular component when the user isn't permitted to see it
* manage accessability to particular view depending on user's permissions
* firing a callback when the user isn't allowed to go to access the component/route

## Why?
Currently there's no permission management in React, the existing components are either over-engineered (full ACL support etc.), or limited to role-based management. `react-permissible` is simple at it's core and solves only one problem - accessing the Component if the necessary permissions are met, do something otherwise.

## Installation
`npm i react-permissible`

## Usage
You can use `react-permissible` in two ways. As an ordinary component and as a Higher Order Component. Both approaches allow you to solve the permission-based rendering a little bit differently.

### Use as an ordinary component with props:
```javascript
import { PermissibleRender } from 'react-permissible';

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
* `userPermissions` is an **array** of permissions set for current user
* `requiredPermissions` is an **array** of required permissions
* `RestrictedComponent` is a component to render

There are also optional props available:
* `oneperm` - only one of required permissions will be necessary (boolean)
* `renderOtherwise` - another component to be rendered if the permissions do not match (the user isn't permitted).

### Usage as a Higher Order Component:

```javascript
import { Permissible } from 'react-permissible';

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
* `RestrictedComponent` is a **component** to render
* `userPermissions` is an **array** of permissions set for current user
* `requiredPermissions` is an **array** of required permissions

There are also optional props available:
* `oneperm` - **boolean** determining that only one of required permissions will be necessary instead of requiring all passed permissions (default)
* `renderOtherwise` - another **component** to be rendered if the permissions do not match (the user isn't permitted).

## Use cases

### Render component when permissions match:
```javascript
import { PermissibleRender } from 'react-permissible';

...

render() {
  return (
    <PermissibleRender
      userPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
      requiredPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
    >
      <RestrictedComponent/>
    </PermissibleRender>
  );
}
```

```javascript
import { Permissible } from 'react-permissible';

...

const PermissibleComponent = Permissible(
  RestrictedComponent,
  ['ACCESS_ADMIN', 'ACCESS_DASHBOARD'], // userPermissions
  ['ACCESS_ADMIN', 'ACCESS_DASHBOARD'], // requiredPermissions
  null, // no callback
  false, // all permissions have to match
);

render() {
  <PermissibleComponent />
}
```

### Render component when only one permission match:
```javascript
import { PermissibleRender } from 'react-permissible';

...

render() {
  return (
    <PermissibleRender
      userPermissions={['ACCESS_ADMIN']}
      requiredPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
      oneperm
    >
      <RestrictedComponent/>
    </PermissibleRender>
  );
}
```

```javascript
import { Permissible } from 'react-permissible';

...

const PermissibleComponent = Permissible(
  RestrictedComponent,
  ['ACCESS_ADMIN'], // userPermissions
  ['ACCESS_ADMIN', 'ACCESS_DASHBOARD'], // requiredPermissions
  null, // no callback
  true, // one permission has to match
);

render() {
  <PermissibleComponent />
}
```

### Render another component when permission requirements aren't met:
```javascript
import { PermissibleRender } from 'react-permissible';

...

const NotAlowedComponent = (
    <p>User not allowed.</p>
);

render() {
  return (
    <PermissibleRender
      userPermissions={['ACCESS_DASHBOARD']}
      requiredPermissions={['ACCESS_ADMIN']}
      renderOtherwise={NotAllowedComponent}
    >
      <RestrictedComponent/>
    </PermissibleRender>
  );
}
```

### Run callback function when permission requirements aren't met:
```javascript
import { Permissible } from 'react-permissible';

...

function callbackFunction({ userPermissions, requiredPermissions }) {
  console.log('Permissions do not match');
}

const PermissibleComponent = Permissible(
  RestrictedComponent,
  ['ACCESS_DASHBOARD'], // userPermissions
  ['ACCESS_ADMIN'], // requiredPermissions
  callbackFunction, // no callback
  false, // all permissions have to match
);

render() {
  <PermissibleComponent />
}
```

## Example app
There is an exemplary app available, allowing to tinker with particular ways of permission management. To run the app:
```
npm run example
```
and go to [localhost:3000](http://localhost:3000/).

## Unit tests
```
npm test
```

## Roadmap
* Passing a callback function as a prop for `PermissibleRender` component

## 🍻
* [@adam-golab](https://github.com/adam-golab) & [@Lukasz-pluszczewski](https://github.com/Lukasz-pluszczewski/) for help
* [Nocny Kochanek](https://nocnykochanek.pl/) band for power
