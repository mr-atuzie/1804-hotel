import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className=" w-[90%] lg:w-[80%] mx-auto">red</div>
    </div>
  );
};

export default Home;
