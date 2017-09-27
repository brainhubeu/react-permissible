import authService from '../services/authService';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../constants/actionTypes';

export function fetchUsers() {
  return {
    types: {
      start: FETCH_USERS,
      success: FETCH_USERS_SUCCESS,
      error: FETCH_USERS_FAILURE,
    },
    promise: ({ apiClient }) => authService(apiClient).fetchUsers(),
  };
}
