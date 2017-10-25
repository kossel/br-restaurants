import { connect } from 'react-redux';
import { getRestaurantsList, selectRestaurant } from 'store/restaurants/actions';
import RestaurantList from 'components/RestaurantList';

const mapStateToProps = state => ({
  ...state.restaurants,
});

const mapDispatchToProps = dispatch => ({
  getRestaurantsList: () => dispatch(getRestaurantsList()),
  selectRestaurant: name => dispatch(selectRestaurant(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
