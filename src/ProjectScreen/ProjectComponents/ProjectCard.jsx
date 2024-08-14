import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaTools, FaStar } from 'react-icons/fa';

const ProjectCard = ({ image, title, githubLink, tools, features, id }) => {
    const controls = useAnimation();
    const ref = React.useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    controls.start({ opacity: 1, x: 0 });
                } else {
                    controls.start({ opacity: 0, x: -100 });
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
        <div id={id} className="h-screen flex items-center justify-center bg-black text-white p-6">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                <motion.div
                    className="flex-shrink-0 mb-6 md:mb-0"
                    ref={ref}
                    initial={{ opacity: 0, x: -100 }}
                    animate={controls}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full max-w-md  object-cover rounded-lg shadow-lg"
                    />
                </motion.div>
                <motion.div className="md:ml-8 text-center md:text-left" initial={{ opacity: 0, x: 100 }} animate={controls} transition={{ duration: 1, ease: "easeInOut" }}>

                    {/* TITLE */}
                    <h2 className="text-4xl font-bold mb-4">{title}</h2>



                        {/* KEY FEATURES - TOOLS */}
                    <div className="grid gap-4  grid-cols-2">
                        <div className="p-4 brightness-200 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2 flex items-center text-center">
                                <FaTools className="mr-2 text-yellow-400" />
                                Tools
                            </h3>
                            <div className="space-y-2">
                                {tools.map((tool, index) => (
                                    <p key={index} className="text-sm">{tool}</p>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 brightness-200 rounded-lg  shadow-md">
                            <h3 className="text-xl font-semibold mb-2 flex items-center text-center">
                                <FaStar className="mr-2 text-yellow-400 " />
                                Key Features
                            </h3>
                            <div className="space-y-2 ">
                                {features.map((feature, index) => (
                                    <p key={index} className="text-sm ">{feature}</p>
                                ))}
                            </div>
                        </div>
                    </div>
       

                    {/* GITHUB LINK */}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded transition-colors duration-300 mb-6"
                        >
                            <FaGithub size={20} className="mr-2" />
                            View on GitHub
                        </a>
                    )}


                </motion.div>
            </div>
        </div>
    );
};

export default ProjectCard;
