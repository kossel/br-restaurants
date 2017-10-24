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
    default: return state;
  }
};
