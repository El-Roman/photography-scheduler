import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Assuming you'll add styles in Home.css

const Booking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {
    // Add your booking logic here
  };

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
      <h1>Book a Session</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default Booking;
