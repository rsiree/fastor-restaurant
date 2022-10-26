import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <Box 
    position='sticky' 
    zIndex={'1'}
    boxShadow=' rgba(0, 0, 0, 0.24) 0px 3px 8px'
    >
        <VStack fontSize={'1xl'}>
            <Text color='gray.600'>Pre Order From</Text> 
            <Text>Delhi Place</Text>
        </VStack>
    </Box>
  )
}
