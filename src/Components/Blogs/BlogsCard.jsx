import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


const BlogsCard = ({ blog, index }) => {
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
                    <h5 className="mb-2 text-2xl font-bold  text-white dark:text-white">{blog.title}</h5>
                    <p className="font-normal text-white  dark:text-white">{blog.description}</p>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white text-white p-2 rounded-lg">View the details...</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default BlogsCard