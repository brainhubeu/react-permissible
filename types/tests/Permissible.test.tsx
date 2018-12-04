import * as React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies, /* this is what we're testing */
import { Permissible, UserAndRequiredPermissions } from '@brainhubeu/react-permissible';

function callbackFunction({ userPermissions, requiredPermissions }: UserAndRequiredPermissions) {
  // eslint-disable-next-line no-console
  console.info(`
    react-permissible: Access Denied
    userPermissions: ${userPermissions}
    requiredPermissions: ${requiredPermissions}
  `);
}

const AccessGranted = ({ message }: { message: string, }) => <>AccessGranted {message}</>;

const RestrictedComponentWithCallback = Permissible(
  AccessGranted,
  ['ACCESS_DASHBOARD'], // userPermissions
  ['ACCESS_ADMIN'], // requiredPermissions
  callbackFunction,
);

render(<RestrictedComponentWithCallback {...{ message: 'test' }} />, document.createElement('div'));
