import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Assuming you'll add styles in Home.css

const Booking = () => {
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
            <Link to="/pricing " className="nav-link">
              Pricing
            </Link>
          </nav>
        </header>
      </div>
      <h1>Book a Session</h1>
    </div>
  );
};

export default Booking;
