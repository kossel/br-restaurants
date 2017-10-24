import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from 'store/enhancedHistory';
import rootReducer from 'store/reducers';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const historyMiddleware = routerMiddleware(history);

const middlewares = [
  thunk,
  historyMiddleware,
];

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
);

export default store;
