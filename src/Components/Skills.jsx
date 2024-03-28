import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const Skills = () => {
  return (
    <div>
      <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption></TableCaption>
    <Thead>
      <Tr>
        <Th>Skills</Th>
        <Th>Decription</Th>
        <Th isNumeric>Rank</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Python</Td>
        <Td>Feature Engineering | EDA | Scikit-Learn | Tensorflow</Td>
        <Td isNumeric>3</Td>
      </Tr>
      <Tr>
        <Td>MERN</Td>
        <Td>MongoDB | Express.js | React |  Node.js | Redux | Tailwind CSS | Docker | Git </Td>
        <Td isNumeric>4</Td>
      </Tr>
      <Tr>
        <Td>ML&DL</Td>
        <Td>Natural Language Processing | Traditional Algorithms (Regressions and Classifications)</Td>
        <Td isNumeric>3</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Other</Th>
        <Th>Pytorch | MysSQL | PostgreSQL | Selenium | Matplotlib | Pandas | </Th>
        <Th isNumeric>3</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  )
}

export default Skills
