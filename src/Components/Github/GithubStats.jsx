import { useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

{/* VARIANTS */}
const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const GithubStats = () => {
    {/* FRAMER MOTION */}
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
        <div className='flex justify-center items-center md:justify-center  mb-0 mt-10 md:mt-10 md:mb-10'>
            <div className="md:w-1/3 w-1/0 mb-6">
                <motion.div ref={ref} initial="hidden" animate={controls} variants={cardVariants} transition={{ duration: 0.5, delay: 0.1 }}>
                    {/* Streak Stats */}
                    <img
                        className="md:block md:h-60 md:rounded-lg md:shadow-lg md:hover:scale-125 duration-500 "
                        src="https://github-readme-streak-stats.herokuapp.com/?user=doguhannilt&theme=vue-dark&hide_border=true"
                        alt="GitHub Streak Stats" />
                </motion.div>
            </div>
        </div>
    );
};

export default GithubStats;
