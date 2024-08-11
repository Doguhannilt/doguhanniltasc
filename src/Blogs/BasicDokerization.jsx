import React from 'react'
import { Box, SkeletonCircle, SkeletonText, Spinner } from '@chakra-ui/react'
const BasicDokerization = () => {
  return (
    <div>
                    <div className='flex justify-center mt-10 text-2xl font-mono'>I AM WORKING ON IT!</div>
    <Box padding='6' boxShadow='md' >
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='2' skeletonHeight='6' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={8} spacing='1' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
  <SkeletonText mt='4' noOfLines={4} spacing='2' skeletonHeight='6' />
  <SkeletonText mt='4' noOfLines={8} spacing='1' skeletonHeight='3' />
</Box>
    </div>
  )
}

export default BasicDokerization
