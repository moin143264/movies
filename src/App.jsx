import React from "react";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favour from "./Pages/Favour";
import Navabar from "./components/Navabar";
import { MoviesProvider } from "./context/MovieContext";
const App = () => {
  return (
    <MoviesProvider>
      <Navabar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favour />} />
        </Routes>
      </main>
    </MoviesProvider>
  );
};

export default App;
