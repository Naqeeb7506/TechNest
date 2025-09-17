import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Footer = () => {
  const text = "Subscribe";
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <h3 className="footer-logo">
            Tech<span>N</span>est
          </h3>
        </div>
        <ul className="links">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <ul className="social">
          <p className="pb-3 text-center">Follow us</p>
          <div className="social-links d-flex gap-3">
            <li>
              <Link to={"https://www.instagram.com/ansari.naqeeb"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/ansari-mohd-naqeeb2002"}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/Naqeeb7506"}>
                <i className="fa-brands fa-github"></i>
              </Link>
            </li>
          </div>
        </ul>
        <div className="subscribe d-flex flex-column gap-3">
          <p>Subscribe to get important updates</p>
          <input
            type="text"
            name="subscribe"
            id="subscribe"
            placeholder="Enter Your Email"
          />
          <div className="footer-btn">
            <Button text={text} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
