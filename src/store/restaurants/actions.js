import { getRestaurants } from 'services/restaurants';

export default function getRestaurantsList() {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_RESTAURANTS',
    });
    getRestaurants()
      .then(restaurants => dispatch({
        type: 'FETCH_RESTAURANTS_SUCCESS',
        data: restaurants,
      }))
      .catch(err => dispatch({
        type: 'FETCH_RESTAURANTS_FAILED',
        error: err,
      }));
  };
}
