import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/1804-logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "about us" },
    { id: 2, link: "/", name: "Menu" },
    { id: 3, link: "/", name: "Rooms" },
    { id: 5, link: "/", name: "testimonials" },
    { id: 6, link: "/contact", name: "contacts" },
  ];
  const handleNav = () => {
    console.log("i was clicked");
  };

  return (
    <div className=" py-4 absolute top-0 z-40  w-full    ">
      <div className=" w-[90%] lg:w-[80%] mx-auto  flex justify-between items-center">
        <img width={250} src={logo} alt="1804-logo" />

        <ul className="hidden text-purple-600 md:flex ">
          {links.map(({ id, link, name }) => {
            return (
              <li
                key={id}
                className=" capitalize px-4 cursor-pointer over:scale-105 duration-200"
              >
                <Link to={link}> {name}</Link>
              </li>
            );
          })}
        </ul>

        <button className="hidden md:flex rounded-md bg-blue-700 text-white px-6 py-3 capitalize hover:bg-green-400 hover:text-black hover:border-2 hover:border-black ">
          Get Started
        </button>

        <button
          onClick={handleNav}
          className=" text-black cursor-pointer z-40 pr-4 md:hidden"
        >
          {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
        </button>
      </div>
      {nav && (
        <div className=" z-40 duration-300 flex flex-col fixed  shadow-md bg-white top-0 right-0  w-[80vw] h-screen">
          <div className="p-4 flex justify-between items-center">
            <div>
              <img width={200} src={logo} alt="1804-logo" />
            </div>
            <div
              onClick={() => setNav(!nav)}
              className=" cursor-pointer text-black  p-4 md:hidden"
            >
              {nav ? (
                <IoCloseOutline size={30} />
              ) : (
                <HiOutlineBars3 size={30} />
              )}
            </div>
          </div>
          <ul className=" px-4 mt-11  ">
            {links.map(({ id, link, name }) => {
              return (
                <Link to={link} onClick={() => setNav(!nav)}>
                  <li
                    key={id}
                    className=" px-4 cursor-pointer text-black capitalize py-4   hover:scale-105 duration-200"
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
