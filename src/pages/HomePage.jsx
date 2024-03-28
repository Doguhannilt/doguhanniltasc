import { Button, Divider, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import GithubStats from '../Components/GithubStats'
import About from '../Components/About'
import Skills from '../Components/Skills'
import Blogs from '../Components/Blogs'
import SearchPopup_detailed from '../Components/SearchPopup'
import SearchPopup from '../Components/SearchPopup'
import Sidebar from './Sidebar'


const HomePage = () => {
  return (
    <div >
      <About/>
      <Divider/>
      <SearchPopup/>
      <Blogs/>
      <Divider/>
      <span className='flex justify-center pt-10 text-3xl font-bold font-mono'>MY GITHUB STATS</span>
      <GithubStats/>
      <Divider/>
      <span className='flex justify-center pt-10 text-3xl font-bold font-mono'>I know...</span>
      <Skills/>
     
      <div>
    </div>
   </div>
  )
}

export default HomePage
