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
                    <BlogsCard key={index} blog={blog} />
                ))}
            </div>
            <div class="  rounded-b text-teal-900 hover:text-white duration-500 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <div>
                        <p class="font-bold">A Huge Blog</p>
                        <a href="/blogs/11" class="text-sm">Chapters added about my learning journey for the Italian Language. You can  check it out by clicking me!</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
