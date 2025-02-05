import React from "react";
import { motion } from "framer-motion";

const text = "Doguhan ";

const Header = () => {
  return (
    <div className="text-center text-black mt-20 xl:ml-32 text-8xl">
      <motion.h2 className="flex justify-center">
        <motion.span>{text}</motion.span>
        <motion.span className="hidden md:block ml-2"> Ilter</motion.span>
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          _
        </motion.span>
      </motion.h2>
    </div>
  );
};

export default Header;
