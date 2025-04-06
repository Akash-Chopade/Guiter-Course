import React from "react";
import { Link } from "react-router-dom"; // If using React Router for navigation
import "./styles/404.css"; // Add custom styles for the 404 page

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
