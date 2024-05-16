import React, { useEffect, useState } from 'react'


import { Text } from '@chakra-ui/react'
import Sidebar from '../pages/Sidebar'


const Counter = ({ targetValue, label }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        setCurrentValue(prevValue => prevValue + 1);
      }
    }, 200); 

    return () => clearInterval(interval);
  }, [currentValue, targetValue]);

  return (
    <div className="text-center md:border-r">
      <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl hover:opacity-50">{currentValue}</h6>
      <p className="text-sm font-medium tracking-widest uppercase lg:text-base">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className='xl:pl-58 xl:pr-60 pb-10 '>
     <div className='mt-10 xl:ml-40 '>
        <div className='flex  lg:justify-center text-center lg:text-center lg:self-center lg:gap-10'>
        <div className='xl:mt-10 xl:pt-10'>
          <div className='flex justify-center'>
            <span className='xl:text-3xl mt-2 md:mt-0 text-xl font-mono '>About Me</span>
            <Sidebar/>
          </div>
            <Text className='mt-6 font-mono lg:tracking-tighter select-all '>
            I am a <span className=' break-words text-wrap'>Full Stack developer</span> who writes <span className='text-yellow-200/80 hover:text-yellow-300'>JavaScript</span> (including <span className='text-blue-300'>React</span>), Python, and technologies like <span className='text-green-300'>MongoDB</span>, Express.js, and Node.js. Additionally, I am passionate about <u>Artificial Intelligence</u>, specifically machine learning and deep learning, and I aim to incorporate these technologies into my projects. Also, I like to try technologies that are not widely used.
            </Text>
        </div>
        </div>
        <div className="font-mono px-4 py-16 xl:ml-30 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 ">
        <Counter targetValue={20} label="AGE" />
        <Counter targetValue={4} label="Developer Career (years)" />
        <Counter targetValue={5} label="Full Stack Project" />
        <Counter targetValue={6} label="Blogs" />
      </div>
    </div>
    </div>
    </div>
  )
}

export default About
