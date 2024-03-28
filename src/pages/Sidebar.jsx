import { useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from '@chakra-ui/react'

import { FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Sidebar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>
      <Button ref={btnRef}  onClick={onOpen} className='ml-4'>
        Details
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Details</DrawerHeader>

          <DrawerBody>
            <div className='flex gap-2'>
            <FaDiscord size={26}/>
            <span className='font-mono'>doguhannilt</span>
            </div>

            <div className='flex gap-2'>
            <SiGmail size={26}/>
            <span className=' font-mono'>Doguhannilt@gmail.com</span>
            </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Sidebar
