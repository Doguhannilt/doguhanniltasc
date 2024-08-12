import React from 'react'
import Resume_Config from'./Resume/Resume_Config'
import Resume_Card from './Resume/Resume_Card'


const Resume = () => {
  return (
      <div>
          <Resume_Config />
          <div className='hidden lg:block lg:text-4xl lg:font-mono lg:text-center lg:mb-10 lg:pt-20'>
              <p className=''>OTHER PROJECTS THAT I HAVE BEEN WORKED</p>
          </div>
          <Resume_Card />
    </div>
  )
}

export default Resume
