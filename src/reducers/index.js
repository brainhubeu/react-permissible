import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
});

export default rootReducer;
