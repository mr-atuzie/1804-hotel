import React from "react";
import sp from "../assets/swimming-pool.jpg";
import snooker from "../assets/snooker.jpg";
import kitchen from "../assets/kitchen.jpg";

const About = () => {
  return (
    <div className=" w-[90%] lg:w-[80%] mx-auto py-28">
      <div className=" w-full flex-row-reverse items-center  flex justify-around ">
        <img className=" w-[40%]" src={sp} alt="" />

        {/* text container */}
        <div className=" w-[40%]">
          <h3 className=" font-semibold text-3xl capitalize">
            An elegant swimming pool and pool side area
          </h3>
          <p className=" text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            commodi a fugiat. Eaque amet temporibus sit, quis provident possimus
            distinctio mollitia cum excepturi. Eveniet, veritatis. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Neque commodi a fugiat.
            Eaque amet temporibus sit, quis provident possimus distinctio
            mollitia cum excepturi. Eveniet, veritatis.Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Neque commodi a fugiat. Eaque
            amet temporibus sit, quis provident possimus distinctio mollitia cum
            excepturi. Eveniet, veritatis.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            commodi a fugiat. Eaque amet temporibus sit, quis provident possimus
            distinctio mollitia cum excepturi. Eveniet, veritatis.
          </p>
        </div>
      </div>
      <div className=" w-full my-6 flex  justify-around items-center ">
        <img className=" w-[40%]" src={snooker} alt="" />

        {/* text container */}
        <div className=" w-[40%]">
          <h3 className=" font-semibold text-3xl capitalize">
            Fun Games in cozy places
          </h3>
          <p className=" text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            commodi a fugiat. Eaque amet temporibus sit, quis provident possimus
            distinctio mollitia cum excepturi. Eveniet, veritatis. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Neque commodi a fugiat.
            Eaque amet temporibus sit, quis provident possimus distinctio
            mollitia cum excepturi. Eveniet.
          </p>
        </div>
      </div>
      <div className=" w-full flex-row-reverse items-center  my-6 flex  justify-around ">
        <img className=" w-[40%]" src={kitchen} alt="" />

        {/* text container */}
        <div className=" w-[40%]">
          <h3 className=" font-semibold text-3xl capitalize">
            24 Hours Restaurant and Room service
          </h3>
          <p className=" text-gray-500 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            commodi a fugiat. Eaque amet temporibus sit, quis provident possimus
            distinctio mollitia cum excepturi. Eveniet, veritatis. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Neque commodi a fugiat.
            Eaque amet temporibus sit, quis provident possimus distinctio
            mollitia cum excepturi. Eveniet.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            commodi a fugiat. Eaque amet temporibus sit, quis provident possimus
            distinctio mollitia cum excepturi. Eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
