const authService = apiClient => ({
  fetchUsers() {
    return apiClient.get('/users/all')
      .then(result => {
        if (result.body.users) {
          return Promise.resolve(result.body);
        }
      })
      .catch(error => Promise.reject(error.body.message));
  },
  login(id) {
    return apiClient.get(`/users/${id}`)
      .then(result => {
        if (result.body.user) {
          return Promise.resolve(result.body);
        }
      })
      .catch(error => Promise.reject(error.body.message));
  },
});

export default authService;
