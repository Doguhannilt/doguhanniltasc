import React from 'react'

import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import SearchPopup from './SearchPopup';



const Blogs = () => {
  return (
    <div>
        <div className='mb-2 flex text-xl justify-center lg:text-3xl xl:font-bold xl:pt-8 font-mono cursor-pointer'>
          <div className='md:grid hidden md:grid-rows-2'>
        <span>READ MY BLOGS </span>
          </div>
        <span className='ml-2 cursor-pointer hidden md:block'><Link to={"pages/Blogs"} target='_blank'><LiaExternalLinkAltSolid size={20}/></Link></span>
        </div>

            <div className='md:flex mb-20 md:flex-cols-2 hidden md:gap-6  flex-cols-2  xl:ml-60 '>
                <div>
        <Link to={"/blogs/1"}className="block overflow-auto h-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"> 
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is JWT (Jsonwebtoken)</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">JWT (JSON Web Token) is a standard used for authentication and authorization in web applications. JWT is commonly used to manage user sessions, authenticate user identities, and ensure secure...</p>
           </Link>
            </div>
                <div>
        <Link to={"/blogs/2"} className="block overflow-auto  h-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to create a login system using AUTH0</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">AUTH0, a popular identity and access management platform can be used to create a robust login system for your web or mobile application. Here’s a step-by-step guide on how to create a basic...</p>
           </Link>
            </div>
                <div>
       <Link to={"/blogs/3"} className="block overflow-auto  h-60 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a form using useForm()</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">To create a form using the useForm() hook in React, you'll first need to set up your React component with the necessary imports and the form structure. </p>
            </Link>
            </div>
            </div>
    </div>
  )
}

export default Blogs
