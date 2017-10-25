import { connect } from 'react-redux';
import RestaurantDetail from 'components/RestaurantDetail';

const mapStateToProps = state => ({
  restaurant: state.restaurants.selectedRestaurant,
});

export default connect(mapStateToProps)(RestaurantDetail);
