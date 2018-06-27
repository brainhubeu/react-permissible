# Render another component if the permissions do not match

If permissions in the `userPermissions` do not match the `requiredPermissions`, the component is not rendered, yet another one is rendered instead. 

```jsx render
<PermissibleRender
    userPermissions={['ACCESS_DASHBOARD']}
    requiredPermissions={['ACCESS_ADMIN']}
    renderOtherwise={<AccessDenied/>}
>
  <AccessGranted/>
</PermissibleRender>
```
