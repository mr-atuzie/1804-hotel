import React from "react";
import hero from "../assets/hero.mp4";

const Hero = () => {
  return (
    <div className="relative h-[70vh] lg:h-[80vh]  bg-black w-full">
      <video
        src={hero}
        className=" w-full h-full object-cover"
        autoPlay
        loop
        muted
      />

      <div className=" w-full h-full absolute top-0 z-30 bg-white/20 flex  items-center">
        <div className=" w-[80%] mx-auto text-center">
          <p className="text-black capitalize tracking-wide font-medium  text-base my-3">
            Good place. Good Rooms. Good Food
          </p>
          <h1 className="  text-purple-600 uppercase text-3xl lg:text-5xl font-bold ">
            Where Luxury Meets comfort <br /> And Style
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
