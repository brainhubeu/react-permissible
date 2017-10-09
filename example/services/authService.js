import usersFixture from '../fixtures/users.fixture';

const authService = apiClient => ({
  fetchUsers() {
    return Promise.resolve({
      users: usersFixture,
    });
  },
  selectUser(id) {
    return Promise.resolve({
      user: usersFixture[id],
    });
  },
});

export default authService;
