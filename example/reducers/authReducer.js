import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOGIN_ACTION,
  LOGIN_ACTION_SUCCESS,
  LOGIN_ACTION_FAILURE,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function auth(state = initialState.auth, action) {
  switch (action.type) {
    case FETCH_USERS:
      return Object.assign({}, state, {
        fetching: true,
        fetchingError: null,
      });
    case FETCH_USERS_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: null,
        users: action.result.users,
      });
    case FETCH_USERS_FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        fetchingError: null,
        users: [],
      });
    case LOGIN_ACTION:
      return Object.assign({}, state, {
        loggingIn: true,
        loginError: null,
      });
    case LOGIN_ACTION_SUCCESS:
      return Object.assign({}, state, {
        loggingIn: false,
        user: action.result.user,
        isAuthenticated: true,
      });
    case LOGIN_ACTION_FAILURE:
      return Object.assign({}, state, {
        loggingIn: false,
        loginError: action.error,
        user: null,
        isAuthenticated: false,
      });
    default:
      return {
        ...state,
      };
  }
}
