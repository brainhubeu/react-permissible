# Render component when one of the permissions match

If at least one permission from `userPermissions` array exists in the `requiredPermissions` array, the component is rendered properly.

```jsx render
<PermissibleRender
  userPermissions={['ACCESS_ADMIN']}
  requiredPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
  oneperm
>
  <AccessGranted/>
</PermissibleRender>
```
