import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Movie = () => {
  const data = useSelector((movie) => movie.movieReducer);

  return (
    <div className="my-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-gray-300 text-lg">
      <div className="flex flex-wrap sm:justify-between justify-center gap-20">
        {data.isLoading ? (
          <p>Something is wrong</p>
        ) : (
          data.movies.results.map((movie) => {
            return (
              <Link
                className="text-center w-48 border border-gray-500"
                to={`/details/${movie.id}`}
                key={movie.id}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt=""
                  />
                  <div>
                    <p className="font-bold">{movie.title}</p>
                    <p className="mt-2">Rating: {movie.vote_average}</p>
                  </div>
                </div>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Movie;
