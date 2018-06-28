# Render a component when all the permissions match

If all the permissions in the `userPermissions` array match the `requiredPermissions`, the component is rendered.

```jsx render
<PermissibleRender
  userPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
  requiredPermissions={['ACCESS_DASHBOARD', 'ACCESS_ADMIN']}
>
  <AccessGranted/>
</PermissibleRender>
```
