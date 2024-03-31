import React from 'react'
import { Link } from 'react-router-dom';


// ICONS
import { FaLinkedin } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// UTILS
import { GetEmail } from '../../utils/Utils';


const Navbar = () => {
  return (
    <div className='bg-gray-800/30 pb-4 '>
      <div className='flex justify-center items-center text-center flex-row gap-6  font-mono pl-2 pt-4 '>
          <Link to={"/"}><span className='md:hover:text-3xl md:text-2xl cursor-pointer  hover:text-xl  font-bold md:font-thin hover:duration-300 duration-300 '>Home</span></Link>
          <Link to={"/pages/Blogs"} exact="true"><span className='md:hover:text-3xl md:text-2xl cursor-pointer  hover:text-xl  font-bold md:font-thin hover:duration-300 duration-300 '>Blogs</span></Link>
          <span onClick={GetEmail} className='md:hover:text-3xl  md:text-2xl cursor-pointer  hover:text-xl  font-bold md:font-thin hover:duration-300 duration-300 '>Contact</span>
          <span ><a href ="https://open.spotify.com/user/rmo45iv7b4zd9l3259bhfemti" target='_blank'><FiHeadphones  className='md:mt-2 cursor-pointer md:size-6   hover:text-gray-400'/></a></span>
          <span ><a href ="https://github.com/Doguhannilt" target='_blank'><FaGithub  className='md:mt-2 cursor-pointer md:size-6   hover:text-gray-400'/></a></span>
          <span ><a href ="https://www.linkedin.com/in/doguhan-ilter/" target='_blank'><FaLinkedin  className='md:mt-2 cursor-pointer md:size-6   hover:text-gray-400'/></a></span>
      </div>
    </div>
   
  )
}

export default Navbar
