import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Assuming you'll add styles in Home.css

const Portfolio = () => {
  return (
    <div>
      <div className="home-container">
        <header className="banner">
          <img src="/cochi-logo-cropped.png" alt="Logo" className="logo" />
          <nav className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/portfolio" className="nav-link">
              My Work
            </Link>
            <Link to="/booking" className="nav-link">
              Book Now
            </Link>
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </nav>
        </header>
      </div>
      <h1>My Work</h1>
      <p> Here you can see all my work</p>
    </div>
  );
};

export default Portfolio;
