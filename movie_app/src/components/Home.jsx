import React, { useEffect } from "react";
import Movies from "./Movies";
import { api_key, api } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";
const Home = () => {

  const dispatch = useDispatch();

  const getMovies = async () => {
    const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results))
  };

  useEffect(() => {
    getMovies();
  },[]);
  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
