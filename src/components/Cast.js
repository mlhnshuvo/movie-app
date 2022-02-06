import React from "react";
import { useSelector } from "react-redux";

const Cast = () => {
  const data = useSelector((movie) => movie.movieReducer);

  return (
    <div className="py-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-32">
      <div className="text-gray-300 flex flex-wrap sm:justify-between justify-center gap-2">
        {data.castDetails.cast &&
          data.castDetails.cast.map((cast) => (
            <div key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt=""
                className="w-48"
              />
              <p>{cast.original_name}</p>
              <p>{cast.character}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cast;
