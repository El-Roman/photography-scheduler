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
              Portfolio
            </Link>
            <Link to="/booking" className="nav-link">
              Book Now
            </Link>
            <Link to="/payment" className="nav-link">
              Payment
            </Link>
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </nav>
        </header>
      </div>
          <h1>My Work</h1>
      <p>    Below are some of my recent photography projects. Click on the images to view larger versions.</p>
      {/* Add your portfolio content here */}
    </div>
  );
};

export default Portfolio;
