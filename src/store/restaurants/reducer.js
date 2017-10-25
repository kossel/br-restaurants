const initialState = {
  loading: false,
  restaurants: [],
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_RESTAURANTS': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'FETCH_RESTAURANTS_SUCCESS': {
      return {
        ...state,
        restaurants: action.data,
        loading: false,
      };
    }
    case 'FETCH_RESTAURANTS_FAILED': {
      return {
        ...state,
        restaurants: action.error,
        loading: false,
      };
    }
    case 'SELECT_RESTAURANT': {
      const found = state.restaurants.filter(res => res.name === action.data);
      return {
        ...state,
        selectedRestaurant: found[0],
        // if there were a unique id for each restaurant, I would not copy it...
      };
    }
    case 'MOUSE_IN_RESTAURANT': {
      const found = state.restaurants.filter(res => res.name === action.data);
      return {
        ...state,
        hoverRestaurant: found[0],
        // if there were a unique id for each restaurant, I would not copy it...
      };
    }
    case 'MOUSE_OUT_RESTAURANT': {
      const found = state.restaurants.filter(res => res.name === action.data);
      return {
        ...state,
        hoverRestaurant: null,
        // if there were a unique id for each restaurant, I would not copy it...
      };
    }
    default: return state;
  }
};
