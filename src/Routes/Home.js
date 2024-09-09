// import React from "react";

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to Roman M. Studios</h1>
//       <p>
//         Hey! My name is Roman and I'm a photographer based in Las Vegas, Nevada.
//         I specialize in portraits and studio photography. I also offer
//         photography services for events and weddings.
//       </p>
//     </div>
//   );
// };

// export default Home;

// src/routes/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styling/Home.css"; // Assuming you'll add styles in Home.css

const Home = () => {
  return (
    <div className="home-container">
      <header className="banner">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
        <nav className="nav-links">
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
      <main className="main-content">
        {/* Add your main content here */}
        <h1>Welcome to My Photography Scheduling App</h1>
        <p>Explore my portfolio, book a session, or make a payment.</p>
      </main>
    </div>
  );
};

export default Home;
