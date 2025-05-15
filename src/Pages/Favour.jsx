import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";
const Favour = () => {
  const { fav } = useMovieContext();
  if (fav) {
    return (
      <div className="fav">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {fav.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="fav-empty">
      <h2>No Favorites Movie Yet...</h2>
      <p>start Adding Movies to your favourites & they will appear here</p>
    </div>
  );
};

export default Favour;
