import { connect } from 'react-redux';
import getRestaurantsList from 'store/restaurants/actions';
import RestaurantList from 'components/RestaurantList';

const mapStateToProps = state => ({
  ...state.restaurants,
});

const mapDispatchToProps = dispatch => ({
  getRestaurantsList: () => dispatch(getRestaurantsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
