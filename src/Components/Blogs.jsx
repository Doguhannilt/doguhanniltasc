import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { blogs } from '../Data/DisplayBlogs';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const Blogs = () => {
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial render

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    return (
        <div className="bg-black py-10">
            <div className='mb-2 flex text-xl justify-center lg:text-3xl xl:font-bold xl:pt-4 font-mono cursor-pointer text-white'>
                <div className='md:grid hidden md:grid-rows-2'>
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
                    <motion.div
                        key={index}
                        ref={ref}
                        className="w-full md:w-1/3 bg-transparent border border-slate-800 hover:border-slate-600 drop-shadow-xl rounded-lg shadow-2xl border-opacity-50 hover:border-opacity-100 overflow-hidden"
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <Link to={blog.to} className="block h-60 max-w-sm p-6 hover:h-80 bg-primary  hover:duration-300 duration-300 border-gray-200 rounded-lg shadow bg-transparent">
                            <div className="relative">
                                <h5 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">{blog.title}</h5>
                                <p className="font-normal text-gray-700  dark:text-gray-400">{blog.description}</p>
                                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-gray-600 text-white p-2 rounded-lg">View the details...</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
