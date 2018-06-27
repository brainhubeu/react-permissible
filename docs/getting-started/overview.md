# react-permissible

#### Making the permission management for components easier.

**react-permissible** is a React Component allowing to
* manage visibility of particular components depending on user's permissions
* replacing particular component when the user isn't permitted to see it
* manage accessability to particular view depending on user's permissions
* firing a callback when the user isn't allowed to go to access the component/route

## Why
Currently there's a lack of simple permission management components for React. The existing components are either over-engineered (full ACL support etc.), or limited to role-based management. **react-permissible** is simple at it's core and solves only one problem - accessing the particular component if the necessary permissions are met, hide or render another component otherwise.
