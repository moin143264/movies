import React, { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MoviesProvider = ({ children }) => {
  const [fav, setfav] = useState([]);
  const [isLoadingFavs, setIsLoadingFavs] = useState(true);

  // Load favorites from localStorage only once
  useEffect(() => {
    const storedFavs = localStorage.getItem("fav");
    if (storedFavs) {
      try {
        const parsed = JSON.parse(storedFavs);
        if (Array.isArray(parsed)) {
          setfav(parsed);
          console.log("✅ Loaded favs from storage", parsed);
        }
      } catch (err) {
        console.error("❌ Failed to parse favs", err);
      }
    }
    setIsLoadingFavs(false); // Mark load done
  }, []);

  // Save favorites only after loading is done
  useEffect(() => {
    if (!isLoadingFavs) {
      localStorage.setItem("fav", JSON.stringify(fav));
      console.log("📦 Saving favs to localStorage", fav);
    }
  }, [fav, isLoadingFavs]);

  const addToFav = (movie) => {
    setfav((prev) => {
      if (!prev.some((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  const remfav = (movieId) => {
    setfav((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => fav.some((movie) => movie.id === movieId);

  return (
    <MovieContext.Provider value={{ fav, addToFav, remfav, isFav }}>
      {children}
    </MovieContext.Provider>
  );
};
