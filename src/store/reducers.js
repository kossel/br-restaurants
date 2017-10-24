import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import restaurants from './restaurants/reducer';


export default combineReducers({
  router: routerReducer,
  restaurants,
});
