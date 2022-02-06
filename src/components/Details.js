import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsMovie, castDetails } from "../store/actions/movieAction";

const Details = () => {
  const data = useSelector((movie) => movie.movieReducer);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(detailsMovie(params.id));
    dispatch(castDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="my-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-gray-300 border py-4">
      <div className="flex flex-wrap gap-10 justify-between">
        <div className="w-96">
          <div className="flex gap-3">
            <img
              src={`https://image.tmdb.org/t/p/w500/${data.movieDetails.poster_path}`}
              alt=""
              className="w-36"
            />
            <div className="">
              <p className="text-2xl font-bold mb-1">
                {data.movieDetails.title}
              </p>
              <p className=" mb-1">Rating: {data.movieDetails.vote_average}</p>
              <div className="flex gap-4 flex-wrap my-4 ">
                <p className="border px-2">{data.movieDetails.runtime} min</p>
                {data.movieDetails.title &&
                  data.movieDetails.genres.map((el) => {
                    return <p key={el.id}>{el.name},</p>;
                  })}
              </div>
              <p className=" mb-1">
                Release Date: {data.movieDetails.release_date}
              </p>
            </div>
          </div>
          <p className="text-2xl font-bold">Overview</p>
          <p>{data.movieDetails.overview}</p>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.movieDetails.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Details;
