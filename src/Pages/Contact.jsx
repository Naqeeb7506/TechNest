import React from "react";
import "../assets/css/contact.css";
import Button from "../components/Button/Button";

const Contact = () => {
  return (
    <div className="text-center container">
      <h3 className="heading-2">
        Contact <span>Us</span>
      </h3>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.86802918625!2d72.82403447482564!3d18.98143485493521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce676a1bf0ad%3A0x9eec84a00cb6dc03!2sSaat%20Rasta%2C%20Mumbai%2C%20Maharashtra%20400011%2C%20India!5e0!3m2!1sen!2sae!4v1756042130822!5m2!1sen!2sae"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="form-container">
        <form action="https://formspree.io/f/xqadzbvq" method="POST">
          <input
            type="text"
            name="Name"
            id="name"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            name="Email"
            id="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email"
          />
          <textarea
            name="Message"
            id="message"
            placeholder="Enter Your Message"
            required
            autoComplete="off"
            rows={5}
          ></textarea>
          <div className="w-100">
            <input type="submit" value={"Send"} className="form-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
