import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../Content/blogs';
import { Input, List, ListIcon, ListItem } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const SearchPopup = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchTerm(value);
  
      if (!value.trim()) {
        setSearchResults([]);
        return;
      }
  
      // Arama sonuçlarını güncelle
      const results = blogs.filter(blog =>
        blog.title.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(results);
    };
  
    return (
      <div className="search-bar grid justify-center w-full mb-4  mt-10 md:mt-10">
        <Input
          type="text"
          value={searchTerm}
          size={"lg"}
          _placeholder={{ color: 'inherit' }}
          onChange={handleInputChange}
          placeholder="Search for a blog..."
          className='w-60 h-20 flex text-center mb-3'
        />
        {searchResults.length > 0 && searchTerm.trim() && (
          <ul>
            {searchResults.map(blog => (
              <li key={blog.id}>
                <List>
                    <ListItem>
                <div className='flex'>
                <ListIcon as={MdCheckCircle} color='green.500' className='' size={20}/>
                <Link to={`/blogs/${blog.id}`}><span className='font-mono flex justify-center'>{blog.title}</span></Link>
                </div>
                </ListItem>
                </List>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default SearchPopup;
