// import { browserHistory } from 'react-router';
// import config from '../constants/config';
// import storage from '../helpers/storage';

const authService = apiClient => ({
  fetchUsers() {
    return apiClient.get('/users/all')
      .then(result => {
        console.log(result.body);

        return Promise.reject(result.body.message);
        // if (result.body.token) {

        //   logger.info('Logged in successfully');
        //   storage.save(storedTokenName, result.body.token);
        //   return Promise.resolve(result.body);
        // }
        // logger.warn(`POST to 'login' finished successfully, however token was not in the response. Got message: "${result.body.message}`, result);
        // return Promise.reject(result.body.message);
      });
  },
  // login(token) {
  //   return apiClient.get('/login', { path: { token } })
  //     .then(result => {

  //       // if (result.body.token) {

  //       //   logger.info('Logged in successfully');
  //       //   storage.save(storedTokenName, result.body.token);
  //       //   return Promise.resolve(result.body);
  //       // }
  //       // logger.warn(`POST to 'login' finished successfully, however token was not in the response. Got message: "${result.body.message}`, result);
  //       // return Promise.reject(result.body.message);
  //     });
  // },

});

export default authService;
