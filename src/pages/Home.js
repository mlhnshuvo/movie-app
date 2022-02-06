import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {movieAction} from "../store/actions/movieAction";
import Navbar from "../components/Navbar";
import Movie from "../components/Movie";
import Pagination from "../components/Pagination";

const Home = () => {
  const [value, setValue] = useState("popular");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieAction(value, 1));
  }, [dispatch, value]);

  const changeHandler = (value) => {
    dispatch(movieAction(value, 1));
    setValue(value);
    console.log(value);
  };

  return (
    <div >
      <Navbar changeHandler={changeHandler} value={value} />
      <Movie />
      <Pagination value={value} />
    </div>
  );
};

export default Home;
