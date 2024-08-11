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
    <div className='flex flex-col items-center justify-center h-full w-full md:pl-60 mt-20  mb-10'>
      <p className='text-3xl font-bold text-center text-white mb-6'>My Blogs</p>
      <div className='space-y-6 w-full max-w-4xl'>
        {getVisibleBlogs().map(blog => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <a 
              href="#" 
              className="block relative rounded-lg shadow-lg hover:shadow-2xl  mb-20 pb-20 transition-shadow ease-in-out transform  p-6 w-full "
            >
              <h5 className="mb-2 text-2xl font-semibold text-white">{blog.title}</h5>
              <p className="text-white">{blog.content}</p>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300">
                  Read The Article
                </button>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default DetailedBlogs;
