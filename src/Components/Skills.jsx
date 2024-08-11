import React from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { skilledBlog } from '../Content/blogs';


const skillsData = [
  { category: 'Languages', description: 'Python, JavaScript', rank: '4' },
  { category: 'Web Development', description: 'React, Node.js, Express.js, MongoDB, Redux, RTK Query, Docker', rank: '3' },
  { category: 'App Development', description: 'React-Native', rank: '2' },
  { category: 'ML Concepts', description: 'Regression, Classification', rank: '4' },
  { category: 'DL Concepts', description: 'Basic NLP Techniques', rank: '1' },
  { category: 'Version Control', description: 'Git', rank: '5' },
  { category: 'Database', description: 'MongoDB, MySQL', rank: '4' },
  { category: 'CSS Frameworks', description: 'TailwindCSS, ChakraUI', rank: '5' },
  { category: 'IDE', description: 'Visual Studio, Jupyter Notebook, PopSQL, Google Colab', rank: '5' },
];

const Skills = () => {
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th>Description</Th>
            <Th isNumeric>Rank</Th>
          </Tr>
        </Thead>
        <Tbody>
          {skillsData.map((item, index) => (
            <Tr key={index}>
              <Td>{item.category}</Td>
              <Td>{item.description}</Td>
              <Td isNumeric>{item.rank || '-'}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Skills
