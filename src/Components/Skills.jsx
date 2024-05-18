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


const Skills = () => {
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            <Th>Skills</Th>
            <Th>Description</Th>
            <Th isNumeric>Rank</Th>
          </Tr>
        </Thead>
        <Tbody>
          {skilledBlog.map(skill => (
            <Tr key={skill.direct1}>
              <Td>{skill.direct1}</Td>
              <Td>{skill.direct2}</Td>
              <Td isNumeric>{skill.direct3}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Skills
