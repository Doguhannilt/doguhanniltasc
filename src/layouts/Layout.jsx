import React from 'react'
import Navbar from '../Components/Layouts/Navbar'
import Footer from '../Components/Layouts/Footer'

// Analytics
import { Analytics } from "@vercel/analytics/react"



const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen bg-black'>
      <Navbar/>
     <div  className='container mx-auto'>{children}</div>
     <Analytics/>
      <Footer/>
    </div>
  )
}

export default Layout
