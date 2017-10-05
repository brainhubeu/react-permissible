export default [
  {
    id: 0,
    username: 'admin',
    permissions: [
      'ACCESS_ADMIN',
      'VIEW_POSTS',
      'ADD_POSTS',
      'EDIT_POSTS',
    ],
  },
  {
    id: 1,
    username: 'manager',
    permissions: [
      'VIEW_POSTS',
      'ADD_POSTS',
      'EDIT_POSTS',
    ],
  },
  {
    id: 2,
    username: 'user1',
    permissions: [
      'ADD_POSTS',
      'VIEW_OWN_POST',
      'EDIT_OWN_POST',
    ],
  },
  {
    id: 3,
    username: 'user2',
    permissions: [
      'ADD_POSTS',
      'VIEW_OWN_POST',
      'EDIT_OWN_POST',
    ],
  },
];
