import React from "react";
import "./services.css";
const Services = () => {
  return (
    <div className="services container">
      <div className="service-1 service">
        <i className="fa-regular fa-truck"></i>
        <h3>Super Fast and Free Delivery</h3>
      </div>
      <div className="mid">
        <div className="service-2 service">
          <i className="fa-solid fa-shield-halved"></i>
          <h3>Non Contact Shipping</h3>
        </div>
        <div className="service-3 service">
          <i className="fa-solid fa-money-bill-transfer"></i>
          <h3>Money-back gauranteed</h3>
        </div>
      </div>
      <div className="service-4 service">
        <i className="fa-regular fa-credit-card"></i>
        <h3>Super Secure Payment System</h3>
      </div>
    </div>
  );
};

export default Services;
