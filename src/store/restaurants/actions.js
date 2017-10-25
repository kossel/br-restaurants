import { getRestaurants } from 'services/restaurants';

function getRestaurantsList() {
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

function selectRestaurant(name) {
  return {
    type: 'SELECT_RESTAURANT',
    data: name,
  };
}

function mouseInRestaurant(name) {
  return {
    type: 'MOUSE_IN_RESTAURANT',
    data: name,
  };
}

function mouseOutRestaurant() {
  return {
    type: 'MOUSE_OUT_RESTAURANT',
  };
}

export {
  selectRestaurant,
  getRestaurantsList,
  mouseOutRestaurant,
  mouseInRestaurant,
};
