import { connect } from 'react-redux';
import {
  getRestaurantsList,
  selectRestaurant,
  mouseInRestaurant,
  mouseOutRestaurant,
} from 'store/restaurants/actions';
import RestaurantList from 'components/RestaurantList';

const mapStateToProps = state => ({
  ...state.restaurants,
});

const mapDispatchToProps = dispatch => ({
  getRestaurantsList: () => dispatch(getRestaurantsList()),
  selectRestaurant: name => dispatch(selectRestaurant(name)),
  mouseInRestaurant: name => dispatch(mouseInRestaurant(name)),
  mouseOutRestaurant: () => dispatch(mouseOutRestaurant()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
