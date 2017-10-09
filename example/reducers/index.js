import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  auth: authReducer,
  view: viewReducer,
});

export default rootReducer;
