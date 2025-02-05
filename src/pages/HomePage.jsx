import { Divider } from '@chakra-ui/react'
import React from 'react'

{/* COMPONENTS */ }
import GithubStats from '../Components/Github/GithubStats'
import Skills from '../Components/Skills/Skills'
import SearchPopup from '../Components/Search/SearchPopup'
import Projects from '../Components/Projects/Projects'
import ProjectsGraph from '../Components/Projects/ProjectsGraph'
import About from '../Components/Header/About'

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Search from '../Components/Search/Search'

const HomePage = () => {
  return (
    <div className="text-black bg-white px-10">

      <About />

      <Divider />
      <SearchPopup />

      <Search />
      <Divider />

      <span className='flex justify-center pt-10 md:pt-16 text-3xl md:text-4xl  text-black font-bold font-mono'>TOP PROJECTS</span>
      <div className="relative flex justify-center">
        <span className='text-sm  group'>
          <motion.div
            whileHover={{ scale: 1.2 }}
          >
            <Link to="/projects" className='text-black text-sm hover:underline hover:duration-300 duration-300 '>View All</Link>
          </motion.div>

        </span>
      </div>
      <Projects />
      <Divider />
      <Divider />
      <span className='flex justify-center pt-10 text-3xl  font-bold font-mono'>MY GITHUB STATS</span>
      <GithubStats />
      <Divider />
      <ProjectsGraph />
      <Divider />
      <Skills />
      <div>
      </div>

    </div>
  )
}

export default HomePage
