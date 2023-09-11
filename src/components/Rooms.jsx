import React from "react";

const Rooms = () => {
  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-20 ">
      <h1 className="text-center text-xl font-medium capitalize">ROOMS</h1>

      <div className=" grid grid-cols-3 gap-10 justify-between  py-20">
        <div className=" bg-white shadow-md">
          <img
            className=""
            src=" https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
          <div className=" p-3 font-medium"> Guest Rooms</div>
        </div>

        <div className=" bg-white shadow-md">
          <img
            src=" https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
          <div className=" p-3 font-medium">Executive</div>
        </div>

        <div>
          <img
            src=" https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80"
            alt=""
          />
          <div className=" p-3 font-medium">Suites</div>
        </div>
      </div>

      <div className="flex justify-center items-center  w-full ">
        <button className=" rounded-md  bg-blue-700 text-white px-6 py-3 capitalize hover:bg-green-400 hover:text-black hover:border-2 hover:border-black ">
          View All Rooms
        </button>
      </div>
    </div>
  );
};

export default Rooms;
