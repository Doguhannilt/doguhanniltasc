import React, { useEffect, useState } from 'react';
import { Text } from '@chakra-ui/react';
import Sidebar from '../pages/Sidebar';
import { motion } from 'framer-motion';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className='md:xl:pl-58 md:xl:pr-60 md:pb-10  mt-2  lg:block bg-cover    md:object-cover rounded-2xl mb-2 md:mb-0 md:rounded-lg text-center'
      style={{
       // backgroundImage: "url('https://images.pexels.com/photos/10111269/pexels-photo-10111269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
      }}
    >

      <div className='md:mt-10 md:xl:ml-40 text-white font-bold md:text-white md:font-bold md:text-center md:xl:text-2xl'>
      <motion.h2
        className="text-2xl font-bold mb-4 text-center pt-10 xl:ml-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
       🛠️ About Me 🛠️
      </motion.h2>
      <motion.p
        className="text-lg mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Hello! I'm Doguhan, a passionate developer with a strong foundation in both web and app development. My expertise spans across a variety of technologies and tools, including Python and JavaScript, React, Node.js, and Express.js. I also have experience working with databases like MongoDB and MySQL, and I'm skilled in using Redux and RTK Query for state management.
      </motion.p>
        {isExpanded && (
          <div className="mt-4 text-lg space-y-4">
            <p>
              In the realm of machine learning and deep learning, I have a solid understanding of regression, classification, and basic NLP techniques. I also utilize Docker for containerization to streamline development processes.
            </p>
            <p>
              When it comes to front-end development, I work with modern CSS frameworks like TailwindCSS and ChakraUI to build responsive and aesthetically pleasing user interfaces. My development environment includes popular tools such as Visual Studio, Jupyter Notebook, PopSQL, and Google Colab.
            </p>
          </div>
        )}
        <button
          onClick={toggleExpand}
          className="mt-4 px-4 py-2 text-center xl:ml-20 bg-gray-500 opacity-50 hover:opacity-100 duration-500 text-white rounded-lg focus:outline-none hover:bg-gray-900 transition  ease-in-out"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className="font-mono px-4 py-16 xl:ml-30 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  text-white text-center xl:ml-40">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <Counter targetValue={20} label="AGE" />
          <Counter targetValue={4} label="Developer Career (years)" />
          <Counter targetValue={5} label="Full Stack Project" />
          <Counter targetValue={6} label="Blogs" />
        </div>
      </div>
    </div>
  );
};

export default About;
