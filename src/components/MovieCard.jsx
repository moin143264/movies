import React from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
const MovieCard = ({ movie }) => {
  const { fav, isFav, addToFav, remfav } = useMovieContext();
  const favourite = isFav(movie.id);
  const onFavClick = (e) => {
    e.preventDefault();
    if (favourite) remfav(movie.id);
    else addToFav(movie);
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className="img-fluid rounded-top"
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`fav-btn ${favourite ? "active" : ""}`}
            onClick={onFavClick}
          >
            {favourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
