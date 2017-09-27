import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reduxBetterPromise from 'redux-better-promise';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middlewares = [
    reduxBetterPromise(),
    routerMiddleware(createHistory()),
  ];

  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  )
  );
}
