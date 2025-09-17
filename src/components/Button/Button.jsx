import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ text }) => {
  return (
    <div className="btn-box">
      <Link to={"/products"}>
        <button className="shop-btn">{text}</button>
      </Link>
    </div>
  );
};

export default Button;
