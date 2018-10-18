import * as React from 'react'
import { render, } from 'react-dom'
import { Permissible, UserAndRequiredPermissions, } from '@brainhubeu/react-permissible'

function callbackFunction({ userPermissions, requiredPermissions, }: UserAndRequiredPermissions){
  console.log(`
    react-permissible: Access Denied
    userPermissions: ${userPermissions}
    requiredPermissions: ${requiredPermissions}
  `)
}

const AccessGranted = () => <>AccessGranted</>

const CallbackComponent = Permissible(
  AccessGranted,
  ['ACCESS_DASHBOARD'], // userPermissions
  ['ACCESS_ADMIN'], // requiredPermissions
  callbackFunction,
);

render(<CallbackComponent />, document.createElement('div'))
