import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800/30 py-4'>
      <div className='container mx-auto flex flex-col  md:flex-row  justify-between items-center'>
        <span className='text-3xl text-white font-bold tracking-tight'>
            Doguhan Ilter
        </span>
        <span className='text-white font-bold tracking-tight flex gap-4'>
            <span>Don't you know I am a developer?</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
