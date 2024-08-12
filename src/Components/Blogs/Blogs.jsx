import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { blogs } from '../../Data/DisplayBlogs';
import BlogsCard from './BlogsCard';



const Blogs = () => {


    return (
        <div className="bg-black py-10">
            <div className='mb-2 flex text-xl justify-center lg:text-3xl xl:font-bold xl:pt-4 font-mono cursor-pointer text-white'>
                <div className='grid  grid-rows-2'>
                    <span>READ MY BLOGS</span>
                </div>
                <span className='ml-2 cursor-pointer hidden md:block'>
                    <Link to={"pages/Blogs"} target='_blank'>
                        <LiaExternalLinkAltSolid size={20} className="text-white" />
                    </Link>
                </span>
            </div>

            <div className='flex flex-wrap justify-center bg-transparent  gap-6 px-4'>
                {blogs.map((blog, index) => (
                 <BlogsCard key={index} blog={blog}/>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
