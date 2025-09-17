import React from "react";
import "./hero.css";
import { motion } from "framer-motion";
import Button from "../Button/Button";

const HeroSection = () => {
  const transition = { duration: 1, ease: "easeOut", delay: 2 };
  const textTransition = { duration: 1, ease: "easeIn" };

  const text = "Shop Now";
  return (
    <div className="container hero-section">
      <div className="left-sec">
        <motion.p
          className="welcome"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={textTransition}
        >
          Welcome To
        </motion.p>
        <motion.h1
          className="heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...textTransition, delay: 1 }}
        >
          Tech<span>N</span>est – Your One-Stop Destination for Innovation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...textTransition, delay: 2 }}
        >
          At TechNest, we bring you the latest and most reliable electronics all
          under one roof. From cutting-edge gadgets to everyday essentials, our
          mission is to make technology accessible, affordable, and hassle-free.
          Whether you’re a student, professional, or tech enthusiast, TechNest
          is designed to meet all your digital needs with quality products,
          seamless shopping, and trusted service.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...textTransition, delay: 3 }}
        >
          <Button text={text} />
        </motion.div>
      </div>
      <div className="right-sec">
        <motion.img
          src="./images/hero-img.jpg"
          alt="heo img"
          initial={{ clipPath: "inset(50% 50% 50% 50%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className="top-background"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
        <motion.div
          className="btm-background"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={transition}
        ></motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
