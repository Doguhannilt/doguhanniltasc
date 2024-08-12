import React from 'react'
import { Link } from 'react-router-dom'

const DetailedBlogsCard = (props) => {
    const { blog } = props;

    if (!blog) {
        return null;
    }

    return (
      
           <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <a 
              href="#" 
              className="block relative rounded-lg shadow-lg hover:shadow-2xl   mb-20 pb-20 transition-shadow ease-in-out transform  p-6 w-full "
            >
              <h5 className="mb-2 text-2xl font-semibold text-white">{blog.title || ''}</h5>
              <p className="text-white">{blog.content || ''}</p>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300">
                  Read The Article
                </button>
              </div>
            </a>
          </Link>    
     
    );
  };
  
  export default DetailedBlogsCard