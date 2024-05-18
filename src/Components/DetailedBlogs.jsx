import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../Content/blogs';


const DetailedBlogs = () => {

  const [page, setPage] = useState(1);
  const pageSize = 10; 
  const getVisibleBlogs = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return blogs.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(blogs.length / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className='flex xl:grid xl:grid-cols-2 flex-col md:grid md:grid-cols-2  md:gap-6 items-center justify-center h-full w-full md:pl-60  mt-20 mb-10'>
        <p className='text-2xl md:hidden font-mono font-bold '>My Blogs</p>
      {getVisibleBlogs().map(blog => (
        <div key={blog.id} className='mt-4'>
          <Link to={`/blogs/${blog.id}`}>
            <a href="#" className="block animate-spinner-grow overflow-auto h-60 max-w-sm p-6 w-full bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{blog.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{blog.content}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default DetailedBlogs;
