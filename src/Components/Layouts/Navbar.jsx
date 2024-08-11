import React from 'react'
import { Link } from 'react-router-dom';


// ICONS
import { FaLinkedin } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

// UTILS
import { GetEmail } from '../../utils/Utils';
import { pages } from '../../Content/blogs';


const Navbar = () => {
  return (
    <div className=' '>
      <div className='flex justify-center items-center text-center flex-row gap-6  font-mono md:pl-2 pl-20 pt-4 '>
        {pages.map(page => (
            <>
            <Link to={page.page_url}><span className='md:hover:text-3xl md:text-2xl cursor-pointer hover:underline  hover:text-xl  font-bold md:font-thin hover:duration-300 duration-300 '>{page.page_content}</span></Link>
           </>
        ))}
        <span onClick={GetEmail} className='md:hover:text-3xl  md:text-2xl cursor-pointer  hover:text-xl  font-bold md:font-thin hover:duration-300  backdrop-brightness-200 duration-300 '>Contact</span>
          <span ><a href ="https://open.spotify.com/user/rmo45iv7b4zd9l3259bhfemti" target='_blank'><FiHeadphones  className='hidden md:block md:mt-2 cursor-pointer md:size-6   hover:text-gray-400'/></a></span>
          <span ><a href ="https://github.com/Doguhannilt" target='_blank'><FaGithub  className='hidden md:block md:mt-2 cursor-pointer md:size-6   hover:text-gray-400'/></a></span>
          <span ><a href ="https://www.linkedin.com/in/doguhan-ilter/" target='_blank'><FaLinkedin  className='hidden md:block md:mt-2 cursor-pointer md:size-6   hover:text-gray-400'/></a></span>
      </div>
    </div>
  )
}

export default Navbar
