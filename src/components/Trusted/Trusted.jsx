import React from "react";
import "./trusted.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Trusted = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="trusted">
      <div className="container  text-center">
        <h3>
          Trusted By
          <span className="numbers">
            <CountUp start={500} end={1000} duration={4} />+
          </span>
          Companies
        </h3>
        <div className="companies">
          <div className="logos">
            <motion.img
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={transition}
              src="./images/company-1.png"
              alt="company"
            />
          </div>
          <div className="logos">
            <motion.img
              src="./images/company-2.png"
              alt="company"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{ ...transition, delay: 0.5 }}
            />
          </div>
          <div className="logos">
            <motion.img
              src="./images/company-3.png"
              alt="company"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{ ...transition, delay: 1 }}
            />
          </div>
          <div className="logos">
            <motion.img
              src="./images/company-4.png"
              alt="company"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{ ...transition, delay: 1.5 }}
            />
          </div>
          <div className="logos">
            <motion.img
              src="./images/company-5.png"
              alt="company"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: "0px" }}
              transition={{ ...transition, delay: 2 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
