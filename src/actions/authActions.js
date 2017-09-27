import authService from '../services/authService';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../constants/actionTypes';

export function fetchUsers() {
  return {
    types: {
      FETCH_USERS,
      FETCH_USERS_SUCCESS,
      FETCH_USERS_FAILURE,
    },
    promise: ({ client }) => authService(client).fetchUsers(),
  };
}
