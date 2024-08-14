import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = () => {
        setIsAnimating(true);
    
        // Gecikmeli olarak kaydırma işlemini başlat
        setTimeout(() => {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }, 1000); // 2000 milisaniye = 2 saniye
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen shadow-2xl brightness-200 font-semibold">
            <motion.div
                className="text-5xl md:text-9xl mb-4 transition-transform duration-300"
                whileHover={{ scale: 1.1, color: "#ffffff", textShadow: "0px 0px 10px rgba(255, 255, 255, 0.7)" }}>
                PROJECTS
            </motion.div>
            <motion.div
                initial={{ y: 0 }}
                animate={isAnimating ? { y: 100, opacity: 0 } : { y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onClick={handleClick}>
                
                <FaArrowDown size={40} className='cursor-pointer' />
            </motion.div>
        </div>
    );
}

export default Header;
