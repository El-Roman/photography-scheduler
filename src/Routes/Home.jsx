import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Assuming you'll add styles in Home.css

const Home = () => {
  return (
    <div className="home-container">
      <header className="banner">
        <img src="/cochi-logo-cropped.png" alt="Logo" className="logo" />
        <nav className="nav-links">
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
      <main className="main-content">
        {/* Add your main content here */}
        <h1>Welcome to Roman M. Studios</h1>
        <p>
          Hey! My name is Roman and I'm a photographer based in Las Vegas,
          Nevada. I specialize in portraits and studio photography. I also offer
          photography services for events and weddings..
        </p>
      </main>
    </div>
  );
};

export default Home;
