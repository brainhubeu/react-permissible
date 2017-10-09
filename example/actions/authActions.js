import authService from '../services/authService';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGIN_ACTION,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_FAILURE,
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

export function selectUser(id) {
  return {
    types: {
      start: LOGIN_ACTION,
      success: LOGIN_ACTION_SUCCESS,
      error: LOGIN_ACTION_FAILURE,
    },
    promise: ({ apiClient }) => authService(apiClient).selectUser(id),
  };
}
