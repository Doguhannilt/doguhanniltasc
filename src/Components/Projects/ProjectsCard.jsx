import { useAnimation, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react'

const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};
const ProjectsCard = ({ project, index }) => {
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
            className="w-full md:w-1/3 bg-transparent rounded-lg shadow-lg overflow-hidden"
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
           
            <div className="p-6">
                <h3 className="text-xl hover:scale-105 duration-300 font-semibold text-white mb-2">{project.name}</h3>
                <p className="text-gray-300 text-xl font-thin ">{project.description}</p>
            </div>
            </a>
        </motion.div>
    )
}

export default ProjectsCard