import { Divider } from '@chakra-ui/react'
import React from 'react'

{/* COMPONENTS */ }
import GithubStats from '../Components/Github/GithubStats'
import Skills from '../Components/Skills/Skills'
import Blogs from '../Components/Blogs/Blogs'
import SearchPopup from '../Components/Search/SearchPopup'
import Projects from '../Components/Projects/Projects'
import ProjectsGraph from '../Components/Projects/ProjectsGraph'
import About from '../Components/Header/About'

import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <div className="bg-black">
      <About />
      <Divider />
      <SearchPopup />
      <Divider />
      <span className='flex justify-center pt-10 md:pt-16 text-3xl md:text-4xl text-white font-bold font-mono'>TOP PROJECTS</span>
      <div className="relative flex justify-center">
        <span className='text-sm text-gray-600 group'>
          <motion.div
          whileHover={{ scale: 1.2 }}
          >
            <a href="https://github.com/Doguhannilt?tab=repositories">You Want More?</a>
          </motion.div>

        </span>
        <motion.img
          src="https://avatars.githubusercontent.com/u/77373443?s=400&u=fae89f65b12ba5130ff1396ab1d971409c1236cc&v=4"
          alt="Profile"
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100"
          style={{ rotate: '10deg' }} // Hafif rotasyon
          initial={{ opacity: 0, y: 0, }}
          whileTap={{ opacity: 1, x:0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
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
