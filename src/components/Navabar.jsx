import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
const Navabar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/fav" className="nav-link">
          Favourites
        </Link>
      </div>
    </div>
  );
};

export default Navabar;
