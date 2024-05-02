import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="fixed -[999] w-full px-20 py-8 flex justify-between items-center">
       <div className='logo'>
      <div className='font-semibold uppercase text-5xl'>SWS</div>
       </div>
       <div className="links flex gap-10">
            <Link className='text-md capitalize font-semibold' to={"/"}>Home</Link>
            <Link className='text-md capitalize font-semibold' to={"/about"}>About us</Link>
            <Link className='text-md capitalize font-semibold' to={"/blogs"}>Blogs</Link>
            <Link className='text-md capitalize font-semibold' to={"/events"}>Events</Link>
            <Link className='text-md capitalize font-semibold' to={"/contact"}>contact</Link>
       </div>
    </div>
  )
}

export default Navbar;