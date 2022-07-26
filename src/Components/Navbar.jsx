import React from 'react'
import {  Link } from "react-router-dom";
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)

  return (
    <div className='flex justify-end items-center bg-black h-20 w-full px-4 fixed'>
        <ul className='hidden md:flex'>
        <li className=' text-gray-500 px-4 cursor-pointer capitalize font-medium hover:scale-100 duration-200'> <Link to='/home'>Home</Link></li>
        <li className=' text-gray-500 px-4 cursor-pointer capitalize font-medium hover:scale-100 duration-200'> <Link to='/aboutme'>About Me</Link></li>
        <li className=' text-gray-500 px-4 cursor-pointer capitalize font-medium hover:scale-100 duration-200'> <Link to='/portfolio'>Portfolio</Link></li>
        <li className=' text-gray-500 px-4 cursor-pointer capitalize font-medium hover:scale-100 duration-200'> <Link to='/contactus'>Contact Us</Link></li>
        </ul>

        <div onClick={() => setNav(!nav)} className='text-white pr-5 cursor-pointer z-10 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav &&  <ul className='md:hidden flex flex-col items-center justify-center top-0 left-0 w-full h-screen absolute bg-black text-gray-500'>
        <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to='/home'>Home</Link></li>
        <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to='/aboutme'>About Me</Link></li>
        <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to='/portfolio'>Portfolio</Link></li>
        <li className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link to='/contactus'>Contact Us</Link></li>
        </ul>}

       
    </div>
  )
}

export default Navbar