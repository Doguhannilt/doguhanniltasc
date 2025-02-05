import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

import { skillsData } from '../../Data/Chart/SkillsChart';
import { chartData, chartOptions } from '../../Data/Chart/SkillsChart';

const Skills = () => {
  return (
    <div className="py-10">
      <div className="text-center text-black mb-8">
        <h2 className="text-2xl font-bold text-black">Skills and Proficiency Levels</h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
          className="px-4 w-2/3 mx-auto flex items-center justify-center text-center"
      >
        <Bar data={chartData} options={chartOptions} />
      </motion.div>
    </div>
  );
};

export default Skills;
