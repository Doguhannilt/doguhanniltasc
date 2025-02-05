import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white py-4 px-4'>
      <div className='container mx-auto flex flex-col  md:flex-row  justify-between items-center'>
        <span className='text-3xl text-black font-bold tracking-tight'>
            Doguhan Ilter
        </span>
        <span className='text-black font-bold tracking-tight flex gap-4'>
            <span>Don't you know I am a developer?</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
