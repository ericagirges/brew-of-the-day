import {
    FETCH_BEER,
    FETCH_BEER_ERROR,
    FETCH_BEER_SUCCESS
} from "../actions";

const initialState = {
    beer: [],
    loadingBeer: true,
    errorMessage: ""
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BEER:
        return {
          ...state,
          loadingBeer: true
        };
      case FETCH_BEER_ERROR:
        return {
          ...state, // handle the error
          loadingBeer: false,
          errorMessage: action.payload.message
        };
      case FETCH_BEER_SUCCESS:
        return {
          ...state,
          beer: action.payload[0],
          loadingBeer: false
        };
      default:
        return state;
    }
  };
  
  export default reducer;