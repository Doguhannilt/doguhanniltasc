import React from 'react'

{/*  */}
import Header from './ProjectComponents/Header'
import ProjectCardRender from './ProjectComponents/ProjectCardRender'
import ProjectNavigation from './ProjectComponents/ProjectNavigation'

const ProjectTab = () => {
    return (
        <div className=' min-h-screen'>
            <ProjectNavigation/>
            <Header />
            <ProjectCardRender/>
        </div>
    )
}

export default ProjectTab