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

            <Link to={"/blogs/1"} className="block overflow-auto h-60 max-w-sm p-6 hover:h-80 bg-white border hover:duration-300 duration-300 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div className="relative">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is JWT (Jsonwebtoken)</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">JWT (JSON Web Token) is a crucial standard in modern web development, serving as a cornerstone for robust authentication and authorization mechanisms within web applications. This versatile token format is widely adopted across the industry for its ability to securely manage user sessions, validate and authenticate user identities, and enforce access controls with utmost reliability.One of the primary strengths of JWT lies in its ability to encapsulate a wealth of information securely, including user details, permissions, and other relevant data, in a compact and portable format. This not only streamlines the authentication process but also enhances security by reducing the need for frequent database queries or session storage on the server-side. </p>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="bg-gray-800 text-white mb-40 p-2 rounded-lg">View the details...</span>
          </div>
        </div>
      </Link>


          <div>
        <Link to={"/blogs/2"} className="block overflow-auto  h-60 max-w-sm p-6 hover:h-80 bg-white border hover:duration-300 duration-300 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
           <div className='relative'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to create a login system using AUTH0</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">AUTH0, a widely acclaimed identity and access management platform, empowers developers to craft a highly resilient login system tailored for both web and mobile applications. This platform offers a comprehensive suite of tools and features, making it an ideal choice for establishing a secure and seamless authentication experience for your users. In the following detailed guide, we'll walk through step-by-step instructions on how to create a fundamental yet sophisticated login system using AUTH0...</p>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="bg-gray-800 text-white p-2 mb-6 rounded-lg">View the details...</span>
          </div>
          </div>
           </Link>
            </div>



                <div>
       <Link to={"/blogs/3"} className="block overflow-auto  h-60 max-w-sm p-6 bg-white border hover:h-80  hover:duration-300 duration-300 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
       <div className="relative">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create a form using useForm()</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">When utilizing the useForm() hook in React to construct a form, your initial step involves configuring your React component by importing essential dependencies and defining the structure of your form. This foundational setup lays the groundwork for leveraging the useForm() hook effectively, allowing you to streamline form development and enhance user interaction within your React application.</p>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <span className="bg-gray-800 text-white p-2  rounded-lg">View the details...</span>
          </div>
           </div>
            </Link>
            </div>


            </div>
    </div>
  )
}

export default Blogs
