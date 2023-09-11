import React from "react";

const Banner = (vid, heading, text) => {
  return (
    <div className=" my-6 h-[60vh] w-full bg-gray-200 relative">
      <video
        src="https://player.vimeo.com/external/403833760.sd.mp4?s=309db6b4a56780b895f3150c561038edb10b5fe9&profile_id=164&oauth2_token_id=57447761"
        autoPlay
        loop
        muted
        alt="about"
        className=" w-full h-full object-cover  "
      />

      <div className="w-full absolute top-0 h-full bg-black/60 flex items-center  ">
        <div className="w-[80%] mx-auto  ">
          {/* <p className=" capitalize text-gray-300 tracking-wide">{heading}</p>
          <div className=" capitalize text-2xl lg:text-4xl font-medium text-gray-100 tracking-wider">
            {text}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
