import { Divider } from '@chakra-ui/react'
import React from 'react'
import GithubStats from '../Components/GithubStats'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Blogs from '../Components/Blogs'
import SearchPopup from '../Components/SearchPopup'
import Projects from '../Components/Projects'
import ProjectsGraph from '../Components/ProjectsGraph'
import SkillLogos from '../Components/SkillLogos'



const HomePage = () => {
  return (
    <div className="bg-black">
      <About />
      <Divider/>
      <SearchPopup />
      <Divider />
      <span className='flex justify-center pt-10 text-3xl text-white font-bold font-mono'>TOP PROJECTS</span>
      <span  className=' flex justify-center text-sm text-gray-600'><a href="https://github.com/Doguhannilt?tab=repositories">You Want More?</a></span>
      <Projects/>
      <Divider/>
      <Blogs />
      <Divider />
      <span className='flex justify-center pt-10 text-3xl text-white font-bold font-mono'>MY GITHUB STATS</span>
      <GithubStats />
      <Divider />
      <ProjectsGraph/>
      <Divider/>
      <span className='flex justify-center pt-10 text-3xl text-white font-bold font-mono'>I know...</span>
      <Skills />
      
     
      <div>
    </div>
   </div>
  )
}

export default HomePage
