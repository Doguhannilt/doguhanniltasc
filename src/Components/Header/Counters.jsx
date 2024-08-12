import React, { useEffect, useState } from 'react'

const Counters = () => {
    
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
  return (
      <>
          
          <Counter targetValue={20} label="AGE" />
          <Counter targetValue={4} label="Developer Career (years)" />
          <Counter targetValue={5} label="Full Stack Project" />
          <Counter targetValue={6} label="Blogs" />
    </>
  )
}

export default Counters