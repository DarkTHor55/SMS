

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[120px] z-50 bg-white shadow-md flex justify-around items-center px-6">
      <div className="logo">
        <div className="font-medium  text-3xl text-blue-500">SWS</div>
      </div>
      
      <div className="links flex gap-6">
        <Link className="text-md text-gray-700 font-medium text-base hover:text-blue-700 transition duration-300" to={"/"}>Home</Link>
        <Link className="text-md text-gray-700 font-medium text-base hover:text-blue-700 transition duration-300" to={"/about"}>About us</Link>
        <Link className="text-md text-gray-700 font-medium text-base hover:text-blue-700 transition duration-300" to={"/blogs"}>Blogs</Link>
        <Link className="text-md text-gray-700 font-medium text-base hover:text-blue-700 transition duration-300" to={"/events"}>Events</Link>
        <Link className="text-md text-gray-700 font-medium text-base hover:text-blue-700 transition duration-300" to={"/contact"}>Contact</Link>
      </div>
      
    </div>
  );
}




export default Navbar;
