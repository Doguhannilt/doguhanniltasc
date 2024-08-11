import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { projects } from '../Data/ProjectsData';



const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
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
            <div className="text-center text-white mb-8">
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        ref={ref}
                        className="w-full md:w-1/3 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                        initial="hidden"
                        animate={controls}
                        variants={cardVariants}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <a href={project.link}>
                        <img 
                            src={project.image} 
                            alt={project.name} 
                            className="w-full h-48 object-cover"
                        />
                            </a>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
