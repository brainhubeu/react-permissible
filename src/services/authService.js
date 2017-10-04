import usersFixture from '../fixtures/users.fixture';

const authService = apiClient => ({
  fetchUsers() {
    return new Promise((resolve, reject) => {
      resolve({
        users: usersFixture,
      });
    });
  },
  selectUser(id) {
    return new Promise((resolve, reject) => {
      resolve({
        user: usersFixture[id],
      });
    });
  },
});

export default authService;
