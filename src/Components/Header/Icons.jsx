import React from 'react'
// ICONS
import { FaLinkedin } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
const Icons = () => {
    return (
        <div>
            <div className="flex gap-4 justify-center text-center items-center mt-4">
                <span ><a href="https://open.spotify.com/user/rmo45iv7b4zd9l3259bhfemti" target='_blank'><FiHeadphones className='hidden text-black  md:block md:mt-2 cursor-pointer md:size-6   hover:text-gray-400' /></a></span>
                <span ><a href="https://github.com/Doguhannilt" target='_blank'><FaGithub className='hidden md:block md:mt-2 cursor-pointer text-black md:size-6   hover:text-gray-400' /></a></span>
                <span ><a href="https://www.linkedin.com/in/doguhan-ilter/" target='_blank'><FaLinkedin className='hidden md:block md:mt-2 text-black cursor-pointer md:size-6   hover:text-gray-400' /></a></span>

            </div>
        </div>
    )
}

export default Icons
