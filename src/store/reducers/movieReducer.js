import * as Types from "../constants/Types";

const init = {
  movies: {},
  movieDetails: {},
  castDetails: {},
  isLoading: true,
};

const movieReducer = (state = init, action) => {
  switch (action.type) {
    case Types.BEDISPATCH: {
      return {
        ...state,
        movies: action.payload.data,
        isLoading: false,
      };
    }
    case Types.BEDISPATCH_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Types.MOVIE_DETAILS: {
      return {
        ...state,
        movieDetails: action.payload,
        isLoading: false,
      };
    }
    case Types.MOVIE_DETAILS_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case Types.CAST_DETAILS: {
      return {
        ...state,
        castDetails: action.payload,
        isLoading: false,
      };
    }
    case Types.CAST_DETAILS_ERROR: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
