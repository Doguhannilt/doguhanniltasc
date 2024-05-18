import React from 'react'
import PDF from '../cv.pdf'

const Resume_Config = () => {
  return (
    <div className  = 'grid place-items-center mt-10 mb-10'>
        <iframe src={PDF} frameborder="0" height="1000px" width="75%" className='mt-10' ></iframe>
    </div>
  )
}

export default Resume_Config
