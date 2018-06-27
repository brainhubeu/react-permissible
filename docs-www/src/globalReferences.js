import React from 'react';
import { Permissible, PermissibleRender } from '@brainhubeu/react-permissible';

const boxStyle = {
  height: 130,
  width: 130,
  display: 'flex',
  margin: '0 auto',
  textAlign: 'center',
  backgroundColor: '#b5ffb5',
  justifyContent: 'center',
  flexDirection: 'column',
};

const notAllowedBoxStyle = {
  ...boxStyle,
  backgroundColor: '#ffb5b5',
};

const AccessGranted = () => (
  <div style={boxStyle}>
    Access Granted
  </div>
);

const AccessDenied = () => (
  <div style={notAllowedBoxStyle}>
    Access Denied
  </div>
);

const callbackFunction = ({ userPermissions, requiredPermissions }) => {
  console.log(`
react-permissible: Access Denied;
userPermissions: ${userPermissions}
requiredPermissions: ${requiredPermissions}
  `);
};

const CallbackComponent = Permissible(
  AccessGranted,
  ['ACCESS_DASHBOARD'], // userPermissions
  ['ACCESS_ADMIN'], // requiredPermissions
  callbackFunction, // no callback
  false, // all permissions have to match
);

export {
  Permissible,
  PermissibleRender,
  AccessGranted,
  AccessDenied,
  CallbackComponent,
};
