import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Movies = () => {
  let movies = [];
  movies = useSelector((state) => state.movies.movies);

  return (
    <div className="container mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <h1> There is no movies </h1>
        )}
      </div>
    </div>
  );
};

export default Movies;
