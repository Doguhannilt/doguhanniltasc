import React, { useRef, useEffect, useState } from 'react';

{/* Framer Motion */}
import { motion, useAnimation } from 'framer-motion';

{/* Registering Chart.js components */ }
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { chartData, dynamicData, projectDurationsInWeeks } from '../../Data/Chart/Chart';

// Registering Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ProjectsGraph = () => {
    const [inView, setInView] = useState(false);
    const controls = useAnimation();
    const ref = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setInView(true);
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);

    const chartVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className=" py-10">
            <div className="flex items-center text-center justify-center text-black mb-8">
                <h2 className="text-2xl font-bold">Projects Completion Time</h2>
            </div>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={chartVariants}
                transition={{ duration: 0.6 }}
                className="px-4 w-2/3 mx-auto flex items-center justify-center text-center"            >
                <Line data={chartData} />
            </motion.div>
        </div>
    );
};

export default ProjectsGraph;
