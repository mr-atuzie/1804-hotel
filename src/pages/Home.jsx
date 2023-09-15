import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Banner from "../components/Banner";
// import banner1 from "../assets/banner1.mp4";
import Rooms from "../components/Rooms";
import Packages from "../components/Packages";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <Rooms />
      <Menu />
      <Packages />
      <Footer />
    </div>
  );
};

export default Home;
