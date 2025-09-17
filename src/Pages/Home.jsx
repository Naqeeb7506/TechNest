import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Services from "../components/Services/Services";
import Trusted from "../components/Trusted/Trusted";

import { useProductContext } from "../Context/productContext";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  const { name } = useProductContext();
  return (
    <>
      {/* {name} */}
      <HeroSection />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
