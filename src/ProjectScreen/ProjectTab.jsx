import React from 'react'

{/*  */}
import Header from './projectComponents/Header'
import ProjectCardRender from './projectComponents/ProjectCardRender'
import ProjectNavigation from './projectComponents/ProjectNavigation'

const ProjectTab = () => {
    return (
        <div className='bg-black min-h-screen'>
            <ProjectNavigation/>
            <Header />
            <ProjectCardRender/>
        </div>
    )
}

export default ProjectTab