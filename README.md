# react-permissible

> Making the permission management for React components easier.

[![CircleCI](https://circleci.com/gh/brainhubeu/react-permissible.svg?style=svg)](https://circleci.com/gh/brainhubeu/react-permissible)
[![Last commit](https://img.shields.io/github/last-commit/brainhubeu/react-permissible.svg)](https://github.com/brainhubeu/react-permissible/commits/master)
[![license](https://img.shields.io/npm/l/@brainhubeu/react-permissible.svg)](https://github.com/brainhubeu/react-permissible/blob/master/LICENSE.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)

[![Coveralls github](https://img.shields.io/coveralls/github/brainhubeu/react-permissible.svg)](https://coveralls.io/github/brainhubeu/react-permissible?branch=master)
[![Downloads](https://img.shields.io/npm/dm/@brainhubeu/react-permissible?color=blue)](https://www.npmjs.com/package/@brainhubeu/react-permissible)
[![Minified](https://img.shields.io/bundlephobia/min/@brainhubeu/react-permissible?label=minified)](https://www.npmjs.com/package/@brainhubeu/react-permissible)
[![npm](https://img.shields.io/npm/v/@brainhubeu/react-permissible.svg)](https://www.npmjs.com/package/@brainhubeu/react-permissible)
[![Contributors](https://img.shields.io/github/contributors/brainhubeu/react-permissible?color=blue)](https://github.com/brainhubeu/react-permissible/graphs/contributors)

`react-permissible` is a React Component allowing to:
* manage visibility of particular components depending on users permissions
* replace particular component when the user isn't permitted to see it
* manage accessability to particular view depending on users permissions
* fire a callback when the user isn't allowed to go to access the component/route

## Why?
Currently there's no permission management in React. The existing components are either over-engineered (full ACL support etc.), or limited to role-based management. `react-permissible` is simple at its core and solves only one problem. Access the Component if the permissions match, do something otherwise.

## Installation
```
npm i @brainhubeu/react-permissible
```

## Usage
```javascript
import { PermissibleRender } from '@brainhubeu/react-permissible';

...

render() {
  return (
    <PermissibleRender
      userPermissions={permissions}
      requiredPermissions={requiredPermissions}
    >
      <RestrictedComponent/>
    </PermissibleRender>
  );
}
```

Where:
* `userPermissions` is an **array** of permissions set for current user
* `requiredPermissions` is an **array** of required permissions

More detailed documentation with several use cases covered is available [here](http://brainhubeu.github.io/react-permissible).

## Running tests
```
npm test
```

## Roadmap
* Passing a callback function as a prop for `PermissibleRender` component

## License

React-permissible is copyright © 2017-2020 [Brainhub](https://brainhub.eu/?utm_source=github) It is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).

## About

`react-permissible` is maintained by [@kkoscielniak](https://github.com/kkoscielniak), [@adam-golab](https://github.com/adam-golab), [@Lukasz-pluszczewski](https://github.com/Lukasz-pluszczewski/) and the Brainhub development team. It is funded by Brainhub and the names and logos for Brainhub are trademarks of Brainhub Sp. z o.o.. You can check other open-source projects supported/developed by our teammates [here](https://brainhub.eu/?utm_source=github). 

[![Brainhub](https://brainhub.eu/brainhub.svg)](https://brainhub.eu/?utm_source=github)

We love open-source JavaScript software! See our other projects or hire us to build your next web, desktop and mobile application with JavaScript.
