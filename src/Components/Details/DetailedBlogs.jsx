import React from 'react';
{/* BLOGS */}
import { blogs } from '../../Content/blogs';
{/* COMPONENTS */}
import DetailedBlogsCard from './DetailedBlogsCard';



const DetailedBlogs = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full  mt-20  mb-10'>
      <p className='text-3xl font-bold text-center text-white mb-6'>My Blogs</p>
      <div className='space-y-6 w-full max-w-4xl'>
        {blogs.map(blog => (
         <DetailedBlogsCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};
export default DetailedBlogs;
