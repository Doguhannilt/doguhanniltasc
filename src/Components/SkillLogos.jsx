import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const items = [
  'MySQL',
  'MongoDB',
  'Docker',
  'Node.js',
  'TailwindCSS',
  'JavaScript',
  'Express.js',
  'React',
  'Redux'
];

const carouselVariants = {
  animate: {
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 20,
      ease: 'linear',
    },
    x: ['100%', '-100%']
  }
};

const SkillCarousel = () => {
  const controls = useAnimation();

  return (
    <div className="overflow-hidden relative p-4 rounded-lg shadow-lg">
      <motion.div
        className="flex"
        variants={carouselVariants}
        animate="animate"
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-max px-4 py-2 flex items-center justify-center text-lg font-semibold text-white">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCarousel;
