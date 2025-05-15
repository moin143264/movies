import React, { createContext, useContext, useEffect, useState } from "react";
const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const MoviesProvider = ({ children }) => {
  const [fav, setfav] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem("fav");
    if (storedFavs) setfav(JSON.parse(storedFavs));
  }, []);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(fav), [fav]);
  });
  const addToFav = (movie) => {
    setfav((prev) => [...prev, movie]);
  };
  const remfav = (movieId) => {
    setfav((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isFav = (movieId) => {
    return fav.some((movie) => movie.id === movieId);
  };
  const value = {
    fav,
    addToFav,
    remfav,
    isFav,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
