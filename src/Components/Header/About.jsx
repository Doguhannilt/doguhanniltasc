import React from 'react';

{/* COMPONENTS */}
import Counters from './Counters';
import Header from './Header';


const About = () => {
  return (
    <div
      className='md:xl:pl-58 md:xl:pr-60 md:pb-10  mt-2  lg:block bg-cover    md:object-cover rounded-2xl mb-2 md:mb-0 md:rounded-lg text-center' style={{}}>
      <Header />
      <div className="font-mono px-4 py-16 xl:ml-30 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  text-white text-center xl:ml-40">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <Counters />
        </div>
      </div>
    </div>
  );
};

export default About;
