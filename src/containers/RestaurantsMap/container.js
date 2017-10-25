import { connect } from 'react-redux';
import RestaurantsMap from 'components/RestaurantsMap';

const mapStateToProps = state => ({
  ...state.restaurants,
});

export default connect(mapStateToProps)(RestaurantsMap);
