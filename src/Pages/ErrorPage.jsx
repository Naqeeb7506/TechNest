import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/error.css";

const ErrorPage = () => {
  return (
    <div className="text-center error">
      <h3>404</h3>
      <h4>Uh oh! You're Lost.</h4>
      <p>The page you are looking for does not exist.</p>
      <div className="home-btn">
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
