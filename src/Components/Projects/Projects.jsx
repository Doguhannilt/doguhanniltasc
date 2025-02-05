import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

{/* DATA */}
import { projects } from '../../Data/ProjectsData';

{/* COMPONENTS */}
import ProjectsCard from './ProjectsCard';



const Projects = () => {
    return (
        <div className="text-black py-10">
           
          

            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
                {projects.map((project, index) => (
                    <ProjectsCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
