import React from 'react'

import ProjectCard from './ProjectCard'
import { ProjectsTabDataList } from '../../Data/ProjectsTabData'

const ProjectCardRender = () => {
    return (
        <>
            {ProjectsTabDataList.map((data) => (
                <ProjectCard
                    className="text-black"
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    tools={data.tools}
                    githubLink={data.githubLink}
                    features={data.features}
                    id={data.id}

                />
            ))}
        </>
    )
}

export default ProjectCardRender