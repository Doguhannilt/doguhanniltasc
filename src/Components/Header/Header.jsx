import React, { useState } from 'react'
import { motion } from 'framer-motion'


const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return (
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
  )
}

export default Header