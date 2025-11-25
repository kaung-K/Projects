import React, { useEffect } from "react";
import { Card, Spinner } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { api, api_key } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedMovies, selectedMovies } from "../redux/action/movies";

const Details = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  const movieDetail = async () => {
    const res = await api.get(`/movie/${movieId}?api_key=${api_key}`);
    dispatch(selectedMovies(res.data));
  };

  useEffect(() => {
    if (movieId) {
      movieDetail();
    }

    return()=>dispatch(removeSelectedMovies())
  }, []);

  let movie = useSelector((state) => state.movies.movie);
  console.log(movie);

  const navigate = useNavigate();
  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="">
        <span className="my-2" onClick={() => navigate("/")}>
          <i className="fa-solid fa-arrow-left"></i>Back
        </span>
      </div>
      {JSON.stringify(movie) == "{}" ? (
        <div className="text-center">
          <h1>
            <Spinner arial-label="Extra large spinner example" size="xl" />
          </h1>
        </div>
      ) : (
        <div className="">
          <Card
            imgAlt="Meaningful alt text"
            imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-white">
              {movie.overview}
            </p>
            <div>
              <span className="bg-gray-500 text-white p-3 rounded-xl">
                <i className="fa-solid fa-star me-2"></i>
                {movie.vote_average}
              </span>
              <span className="ms-4 bg-gray-500 text-white p-3 rounded-xl">
                <i className="fa-regular fa-calendar me-2"></i>
                {movie.release_date}
              </span>
              <span className="ms-4 bg-gray-500 text-white p-3 rounded-xl">
                <i className="fa-solid fa-users me-2"></i>
                {movie.vote_count}
              </span>
              <span className="ms-4 bg-gray-500 text-white p-3 rounded-xl">
                <i className="fa-solid fa-earth-americas me-2"></i>
                {movie.production_countries[0].name}
              </span>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Details;
