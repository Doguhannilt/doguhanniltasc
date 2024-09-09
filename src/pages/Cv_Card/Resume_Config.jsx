import React, { useState } from 'react';
import PDF_Web_Development from './CvWebDevelopment.pdf';
import PDF_Mobile_Development from './CvMobileDeveloper.pdf';

const Resume_Config = () => {
  const [activePDF, setActivePDF] = useState('web'); // Default is web development resume

  return (
    <div className='grid place-items-center mt-10 mb-10'>
      <div className="flex space-x-4 mb-4">
        <button 
          onClick={() => setActivePDF('web')} 
          className={`px-4 py-2 rounded ${activePDF === 'web' ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          Web Development Resume
        </button>
        <button 
          onClick={() => setActivePDF('mobile')} 
          className={`px-4 py-2 rounded ${activePDF === 'mobile' ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          Mobile Development Resume
        </button>
      </div>

      {activePDF === 'web' ? (
        <iframe 
          src={PDF_Web_Development} 
          frameBorder="0" 
          height="1000px" 
          width="75%" 
          className='mt-10'
        ></iframe>
      ) : (
        <iframe 
          src={PDF_Mobile_Development} 
          frameBorder="0" 
          height="1000px" 
          width="75%" 
          className='mt-10'
        ></iframe>
      )}
    </div>
  );
};

export default Resume_Config;
