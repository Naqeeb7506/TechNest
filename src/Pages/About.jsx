import React from "react";

import "../components/HeroSection/hero.css";
import { motion } from "framer-motion";

const About = () => {
  const textTransition = { duration: 1, ease: "easeIn" };
  const transition = { duration: 1, ease: "easeOut", delay: 2 };
  return (
    <div className="container hero-section">
      <div className="left-sec">
        <motion.h1
          className="heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
        >
          About Tech<span>N</span>est
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...textTransition, delay: 1 }}
        >
          At TechNest, we believe technology should simplify life, inspire
          creativity, and connect people. Founded with the vision of creating a
          reliable online hub for electronics, TechNest is more than just an
          e-commerce store – it’s a space where innovation meets everyday needs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...textTransition, delay: 2 }}
        >
          We offer a wide range of electronics, from the latest gadgets and
          accessories to essential tech solutions, ensuring our customers find
          everything they need in one place. Our focus is on:
        </motion.p>
        <ul>
          <motion.li
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 3 }}
          >
            <b>Quality Products</b> – Only the best and most reliable items
            curated for you.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 3.5 }}
          >
            <b>Affordable Prices</b> – Making technology accessible without
            compromise.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 4 }}
          >
            <b>Seamless Experience</b> – Smooth browsing, secure checkout, and
            quick delivery.
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 4.5 }}
          >
            <b>Customer First</b> – A commitment to excellent support and
            satisfaction.
          </motion.li>
        </ul>

        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...textTransition, delay: 5 }}
        >
          At TechNest, we’re not just selling products – we’re building a
          community of tech lovers who want to stay ahead in the digital world.
        </motion.p>
      </div>
      <div className="right-sec">
        <motion.img
          src="./images/about-img.jpg"
          alt="heo img"
          initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className="top-background"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="btm-background"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
      </div>
    </div>
  );
};

export default About;
