# Render a component when one of the permissions matches

If at least one permission from the `userPermissions` array exists in the `requiredPermissions` array, the component is rendered.

```jsx render
<PermissibleRender
  userPermissions={['ACCESS_ADMIN']}
  requiredPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
  oneperm
>
  <AccessGranted/>
</PermissibleRender>
```
