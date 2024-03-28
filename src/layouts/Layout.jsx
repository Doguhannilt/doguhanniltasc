import React from 'react'
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar/>
     <div  className='container mx-auto'>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
