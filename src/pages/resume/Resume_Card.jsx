import React from 'react'
import { popularGithub } from '../../Content/blogs'


const Resume_Card = () => {
  return (
    <div className="hidden lg:rounded  lg:shadow-lg lg:grid grid-cols-3 h-80  w-full gap-10 ">
      {popularGithub.map(popular => (
        <div className="p-4 border border-blue-200 opacity-50 hover:opacity-100 hover:bg-gray-600 hover:duration-300 duration-300 rounded mb-10" key={popular.id}> 
              <a href={popular.link}><div className="font-bold text-xl mb-2">{popular.title}</div>
                  <div className='mb-6'>{popular.date}</div>
          <p className="text-white text-base">{popular.content}</p> 
        </a> 
        </div>
      ))}
    </div>
  )
}

export default Resume_Card
