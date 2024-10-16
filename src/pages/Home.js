// src/pages/Home.js
import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import itineraryIcon from "../assets/images/itinerary-icon.png";
import bookingIcon from "../assets/images/booking-icon.png";
import jobIcon from "../assets/images/jobs-icon.png";
import forumIcon from "../assets/images/forum-icon.png";
import supportIcon from "../assets/images/support-icon.png";
import sitelogo from "../assets/images/sitelogo.png";

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img
            src={sitelogo}
            alt="Register as Freelancer"
            className="option-icon"
          />

          <Link to="/user-dashboard">UserDashboard</Link>
        </div>

        <div className="auth-buttons">
          <button className="auth-button">Login</button>
          <button className="auth-button">Register</button>
          <button className="auth-button">Admin</button>
        </div>
      </header>

      {/* Body Section */}
      <main className="body">
        <h2 className="welcome-message">Welcome to City Compass!</h2>
        <p className="value-proposition">
          Your guide to local attractions, services, and job opportunities.
        </p>

        <section className="features">
          {/* <h2 className="features-header">Our Features</h2> */}
          <div className="feature-icons">
            <div className="icon-item">
              <Link to="/itinerary-planning" className="icon-link">
                <img src={itineraryIcon} alt="Itinerary Planning" />
                <h3>Itinerary Planning</h3>
                <p>Plan your perfect day with local attractions and events.</p>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/bookingservices" className="icon-link">
                <img src={bookingIcon} alt="Booking Services" />
                <h3>Booking Services</h3>
                <p>Book reliable local services quickly and easily.</p>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/itinerary-planning" className="icon-link">
                <img src={jobIcon} alt="Finding Jobs" />
                <h3>Finding Jobs</h3>
                <p>Discover job opportunities tailored for you.</p>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/itinerary-planning" className="icon-link">
                <img src={forumIcon} alt="Community Forum" />
                <h3>Community Forum</h3>
                <p>Join discussions and connect with locals.</p>
              </Link>
            </div>
            <div className="icon-item">
              <Link to="/itinerary-planning" className="icon-link">
                <img src={supportIcon} alt="Help and Support" />
                <h3>Help and Support</h3>
                <p>Access FAQs and reach out for assistance anytime.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Ratings Section
                <section className="ratings">
                    <h2>User Ratings</h2>
                    <div className="rating-item">
                        <span className="rating-star">⭐</span>
                        <span className="rating-text">4.8/5 - "Excellent service and support!"</span>
                    </div>
                    <div className="rating-item">
                        <span className="rating-star">⭐</span>
                        <span className="rating-text">4.7/5 - "A great way to find local services!"</span>
                    </div>
                </section> */}
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 City Compass. All rights reserved.</p>
          <div className="footer-links">
            <a href="/terms">Terms of Service</a>
            <span>|</span>
            <a href="/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="/contact">Contact Us</a>
          </div>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <span>|</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <span>|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
