import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import reducers from 'store/reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux';
import history from 'store/enhancedHistory';
import rootReducer from 'store/reducers';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
const historyMiddleware = routerMiddleware(history);

const middlewares = [
  historyMiddleware,
];

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    )
);

export default store;
