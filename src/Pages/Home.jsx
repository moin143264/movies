import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { getPopularMovie, searchMovie } from "../services/api";
const Home = () => {
  const [searchQuery, setSearchquery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setlLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovie = async () => {
      try {
        const popularMovies = await getPopularMovie();
        setMovies(popularMovies);
      } catch (error) {
        console.log(err);
        setError("fail To load");
      } finally {
        setlLoading(false);
      }
    };
    loadPopularMovie();
  }, []);
  // const movies = [
  //   { id: 1, title: "john wick", release_date: "2002" },
  //   { id: 2, title: "Terminator", release_date: "2000" },
  //   { id: 3, title: "1920", release_date: "2003" },
  //   { id: 4, title: "Evil Return", release_date: "2008" },
  //   { id: 5, title: "Haunted", release_date: "2006" },
  //   { id: 6, title: "Raaz", release_date: "2004" },
  // ];
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setlLoading(true);
    try {
      const searchResult = await searchMovie(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (error) {
      console.log(err);
    } finally {
      setlLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-ip"
          placeholder="Search For movie"
          value={searchQuery}
          onChange={(e) => setSearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-msg">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
//  <div className="movies-grid">
//         {movies.map(
//           (movie) =>
//             movie.title.toLowerCase().startsWith(searchQuery) && (
//               <MovieCard key={movie.id} movie={movie} />
//             )
//         )}
//       </div>
