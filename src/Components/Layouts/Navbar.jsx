import React from 'react';
import { Link } from 'react-router-dom';

// UTILS
import { GetEmail } from '../../utils/Utils';

// React Icons
import { FaHome, FaFileAlt, FaEnvelope, FaProjectDiagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-end items-end text-end flex-row gap-6 mb-20 mr-10 font-mono md:pl-2 pl-24 pt-4 text-gray-700 hover:text-black'>
        <Link to="/" className='flex items-center gap-2'>
          <FaHome />
          <span className='md:text-xl sm:text-sm cursor-pointer hover:underline text-gray-700 hover:text-black hover:duration-300 duration-300'>
            Home
          </span>
        </Link>

        <Link to="/Projects" className='hidden md:flex items-center gap-2'>
          <FaProjectDiagram />
          <span className='md:text-xl cursor-pointer hover:underline text-gray-700 hover:text-black hover:duration-300 duration-300'>Projects</span>
        </Link>

        <Link to="/Resume" className='flex items-center gap-2'>
          <FaFileAlt />
          <span className='md:text-xl sm:text-sm cursor-pointer hover:underline text-gray hover:duration-300 duration-300'>
            Resume
          </span>
        </Link>

        <span onClick={GetEmail} className='flex items-center gap-2 md:text-xl cursor-pointer text-gray-700 hover:text-black hover:duration-300 backdrop-brightness-200 duration-300'>
          <FaEnvelope />
          Contact
        </span>


      </div>
    </div>
  );
}

export default Navbar;
