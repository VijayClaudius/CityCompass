// // src/pages/BookingServices.js
// import React from "react";
// import { Link } from "react-router-dom";
// import "./BookingServices.css"; // Import custom styles

// const BookingServices = () => {
//   return (
//     <div className="booking-services">
//       <h1 className="booking-header">Booking Services</h1>
//       <p className="booking-description">
//         Choose an option to manage your freelance services.
//       </p>
//       <div className="booking-options">
//         <div className="option-item">
//           <Link to="/RegFreeLancer" className="option-link">
//             <h2>Register as Freelancer</h2>
//           </Link>
//         </div>
//         <div className="option-item">
//           <Link to="/ViewServices" className="option-link">
//             <h2>View Services</h2>
//           </Link>
//         </div>
//         <div className="option-item">
//           <Link to="/login-freelancer" className="option-link">
//             <h2>Login as Freelancer</h2>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingServices;

// src/pages/BookingServices.js
import React from "react";
import { Link } from "react-router-dom";
import "./BookingServices.css"; // Import custom styles
import registerIcon from "../assets/images/register-icon.png"; // Add appropriate icons
import viewIcon from "../assets/images/view-icon.png";
import loginIcon from "../assets/images/login-icon.png";

const BookingServices = () => {
  return (
    <div className="booking-services">
      <h1 className="booking-header">Manage Your Freelance Services</h1>
      <p className="booking-description">
        Whether you're new or an experienced freelancer, manage your services
        efficiently with our options below.
      </p>

      <div className="booking-options">
        <div className="option-item">
          <Link to="/RegFreeLancer" className="option-link">
            <img
              src={registerIcon}
              alt="Register as Freelancer"
              className="option-icon"
            />
            <h2>Register as Freelancer</h2>
            <p>Start your freelance journey by registering your services.</p>
          </Link>
        </div>
        <div className="option-item">
          <Link to="/ViewServices" className="option-link">
            <img src={viewIcon} alt="View Services" className="option-icon" />
            <h2>View Services</h2>
            <p>See all the services you've registered and their details.</p>
          </Link>
        </div>
        <div className="option-item">
          <Link to="/FLogin" className="option-link">
            <img
              src={loginIcon}
              alt="Login as Freelancer"
              className="option-icon"
            />
            <h2>Login as Freelancer</h2>
            <p>Access your account and manage your services.</p>
          </Link>
        </div>
      </div>

      {/* New Section Below the Services */}
      <div className="extra-content">
        <h2>Why Choose Us?</h2>
        <p>
          City Compass helps you connect with thousands of clients in your area.
          We provide a platform to showcase your skills, manage bookings, and
          grow your freelance business efficiently. Join our growing community
          of freelancers today!
        </p>

        <div className="extra-features">
          <div className="feature-box">
            <h3>Connect with Clients</h3>
            <p>
              Build strong client relationships and get more job opportunities.
            </p>
          </div>
          <div className="feature-box">
            <h3>Manage Your Bookings</h3>
            <p>Keep track of your schedule, bookings, and payments easily.</p>
          </div>
          <div className="feature-box">
            <h3>Grow Your Business</h3>
            <p>Expand your reach and grow your freelance business with ease.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingServices;
