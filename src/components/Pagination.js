import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieAction } from "../store/actions/movieAction";

const Pagination = ({ value }) => {
  const dispatch = useDispatch();
  const data = useSelector((movie) => movie.movieReducer);
  return (
    <div className="py-24 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 text-lg text-gray-300">
      <div className="flex justify-between flex-wrap gap-5">
        <p className="px-8 rounded outline-none">
          Showing {data.movies.page} to {data.movies.total_pages} of{" "}
          {data.movies.total_results} results
        </p>
        <div className="flex justify-between flex-wrap gap-3">
          {data.movies.page === 1 ? (
            <button className="bg-gray-500 px-8 rounded outline-none cursor-not-allowed text-black">
              Previous
            </button>
          ) : (
            <button
              className="bg-yellow-400 px-8 rounded outline-none text-black"
              onClick={() => dispatch(movieAction(value, data.movies.page - 1))}
            >
              Previous
            </button>
          )}
          <input
            type="number"
            className="rounded outline-none text-black px-2"
            placeholder="Put number and Enter"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                dispatch(movieAction(value, e.target.value));
                e.target.value = "";
              }
            }}
          />
          {data.movies.page === data.movies.total_pages ? (
            <button className="bg-gray-500 px-8 rounded outline-none cursor-not-allowed text-black">
              Next
            </button>
          ) : (
            <button
              className="bg-yellow-400 px-8 rounded outline-none text-black"
              onClick={() => dispatch(movieAction(value, data.movies.page + 1))}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
