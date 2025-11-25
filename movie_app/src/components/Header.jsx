import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { api, api_key } from "../api/api";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../redux/action/movies";

const Header = () => {
  const movieName = useRef("");
  const dispatch = useDispatch();

  const searchMovie = async () => {
    if (movieName.current.value != "") {
      const res = await api.get(
        `/search/movie?query=${movieName.current.value}&api_key=${api_key}`
      );
      dispatch(fetchMovies(res.data.results));
    } else {
      const res = await api.get(`/movie/now_playing?api_key=${api_key}`);
      dispatch(fetchMovies(res.data.results));
    }
  };

  return (
    <Navbar fluid rounded style={{ backgroundColor: "#191970" }}>
      <Link to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Movie-Channel
        </span>
      </Link>
      <div className="flex md:order-2">
        <form className="flex item-center justify-center">
          <TextInput placeholder="Search..." ref={movieName} />
          <button
            type="button"
            onClick={() => searchMovie()}
            className="bg-gray-900 text-white p-2 rounded-lg ms-2"
          >
            Search
          </button>
        </form>
      </div>
    </Navbar>
  );
};

export default Header;
