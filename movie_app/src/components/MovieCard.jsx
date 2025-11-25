import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="max-w-sm">
        <Link to={`/movies/details/${movie.id}`}>
          <Card
            imgAlt="Meaningful alt text"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
                {movie.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-white line-clamp-3">
                {movie.overview}
              </p>
              <div>
                <span className="bg-gray-500 text-white p-3 rounded-xl">
                    <i className="fa-solid fa-star me-2"></i>{movie.vote_average.toFixed(1)}
                </span>
                <span className="ms-4 bg-gray-500 text-white p-3 rounded-xl">
                    <i className="fa-regular fa-calendar me-2"></i>{movie.release_date}
                </span>
              </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
