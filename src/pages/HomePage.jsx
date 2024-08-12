import { Divider } from '@chakra-ui/react'
import React from 'react'

{/* COMPONENTS */}
import GithubStats from '../Components/Github/GithubStats'
import Skills from '../Components/Skills/Skills'
import Blogs from '../Components/Blogs/Blogs'
import SearchPopup from '../Components/Search/SearchPopup'
import Projects from '../Components/Projects/Projects'
import ProjectsGraph from '../Components/Projects/ProjectsGraph'
import About from '../Components/Header/About'



const HomePage = () => {
  return (
    <div className="bg-black">
      <About />
      <Divider />
      <SearchPopup />
      <Divider />
      <span className='flex justify-center pt-10 md:pt-16 text-3xl md:text-4xl text-white font-bold font-mono'>TOP PROJECTS</span>
      <span className=' flex justify-center text-sm text-gray-600'><a href="https://github.com/Doguhannilt?tab=repositories">You Want More?</a></span>
      <Projects />
      <Divider />
      <Blogs />
      <Divider />
      <span className='flex justify-center pt-10 text-3xl text-white font-bold font-mono'>MY GITHUB STATS</span>
      <GithubStats />
      <Divider />
      <ProjectsGraph />
      <Divider />
      <span className='flex justify-center pt-10 text-3xl text-white font-bold font-mono'>I know...</span>
      <Skills />
      <div>
      </div>
    </div>
  )
}

export default HomePage
