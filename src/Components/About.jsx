import React from 'react'


import { Text } from '@chakra-ui/react'
import Sidebar from '../pages/Sidebar'


const About = () => {
  return (
    <div className='xl:pl-58 xl:pr-60 pb-10'>
     <div className='mt-10 xl:ml-40 '>
        <div className='flex  lg:justify-center text-center lg:text-center lg:self-center lg:gap-10'>


        <div className='xl:mt-20 xl:pt-20'>
          <div className='flex justify-center'>
            <span className='xl:text-3xl mt-2 md:mt-0 text-xl font-mono '>About Me</span>
            <Sidebar/>
          </div>
            
            <Text className='mt-6 font-mono lg:tracking-tighter '>
            I am a <span className='bg-gray-700 break-words text-wrap'>Full Stack developer</span> who writes <span className='text-yellow-200/80'>JavaScript</span> (including <span className='text-blue-300'>React</span>), Python, and technologies like <span className='text-green-300'>MongoDB</span>, Express.js, and Node.js. Additionally, I am passionate about <u>Artificial Intelligence</u>, specifically machine learning and deep learning, and I aim to incorporate these technologies into my projects. Also, I like to try technologies that are not widely used.
            </Text>
        </div>
        </div>
     </div>
    </div>
  )
}

export default About
