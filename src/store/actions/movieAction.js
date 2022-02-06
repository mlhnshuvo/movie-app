import * as Types from "../constants/Types";
import Axios from "../../utils/Axios";

export const movieAction = (value, page, query) => (dispatch) => {
  const url = query
    ? `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
    : `/movie${`/${value}`}?api_key=${
        process.env.REACT_APP_API_KEY
      }&page=${page}`;
  Axios.get(url)
    .then((response) => {
      dispatch({
        type: Types.BEDISPATCH,
        payload: response,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.BEDISPATCH_ERROR,
        payload: err,
      });
    });
};

export const detailsMovie = (id) => (dispatch) => {
  const detialurl = `/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
  Axios.get(detialurl)
    .then((response) => {
      dispatch({
        type: Types.MOVIE_DETAILS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.MOVIE_DETAILS_ERROR,
        payload: err,
      });
    });
};

export const castDetails = (id) => (dispatch) => {
  const casturl = `/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  Axios.get(casturl)
    .then((response) => {
      dispatch({
        type: Types.CAST_DETAILS,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: Types.CAST_DETAILS_ERROR,
        payload: err,
      });
    });
};
