import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed w-full px-20 py-8 flex justify-between items-center  top-0 left-0  bg-white shadow-lg p-4">
       <div className='logo'>
          <div className='font-semibold uppercase text-5xl'>SWS</div>
       </div>
       <div className="links flex gap-10" style={{ 
           '@media screen and (max-width: 768px)': {
             gap: '5px', /* Adjust as needed */
           }
         }}>
            <Link className='text-md capitalize font-semibold' to={"/"}>Home</Link>
            <Link className='text-md capitalize font-semibold' to={"/about"}>About us</Link>
            <Link className='text-md capitalize font-semibold' to={"/blogs"}>Blogs</Link>
            <Link className='text-md capitalize font-semibold' to={"/events"}>Events</Link>
            <Link className='text-md capitalize font-semibold' to={"/contact"}>Contact</Link>
       </div>
    </div>
  )
}

export default Navbar;
