import axios from "axios";

// ACTION TYPES
export const FETCH_BEER = "FETCH_BEER";
export const FETCH_BEER_SUCCESS = "FETCH_BEER_SUCCESS";
export const FETCH_BEER_ERROR = "FETCH_BEER_ERROR";

// ACTION CREATORS
export const fetchBeer = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_BEER });
      axios
        .get("https://api.punkapi.com/v2/beers/random")
        .then((response) => {
            console.log("response", response)
          dispatch({ type: FETCH_BEER_SUCCESS, payload: response.data});
        })
        .catch((error) => {
          dispatch({
            type: FETCH_BEER_ERROR,
            payload: { message: "Whoops. That's embarrasing. BRB refilling the tap." }
          });
        });
    };
  };