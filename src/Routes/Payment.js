import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Assuming you'll add styles in Home.css

export default function Payment() {
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
      <h1>Payment</h1>
      <p> Here we get paid!</p>
    </div>
  );
}
