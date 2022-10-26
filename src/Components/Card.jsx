import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export const Card = ({item}) => {
  return (
    <Box 
    // border='1px solid lightgray'
    w='700px'
    borderRadius='10px'
    marginBottom='1%'
    p='2%'
    boxShadow= "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px"
    >
      <HStack>
        <Box >
            <Image src={item.images[0].url} w='300px' h='90%'/>
        </Box>
        <Box 
        // border='1px solid gray'
        p='0% 1%'
        w='60%'
        
        >
            <Text fontSize='2xl'>{item.restaurant_name}</Text>

            <HStack wrap={'wrap'}>
                {item.cuisines?.map((e)=>(
                   <Text color='gray' key={e.cuisine_id}>{e.cuisine_name},</Text>
                ))}
            </HStack>

            {item.location? 
            <Text textAlign={'left'} color='gray.800' >
                {item.location.location_address}, {item.location.location_address_2}, {item.location.location_locality}, {item.location.city_name}, {item.location.state_name}
            </Text>
            :""
            }

            <HStack gap='5%' color='gray.500'>
                <HStack><Text>Opens:</Text> <Text color='red.400'>{item.opens_at}</Text></HStack>
                <HStack><Text>Closes: </Text><Text color='red.200'>{item.closes_at}</Text></HStack>
            </HStack>

            <HStack justify='space-between'>

                <VStack>
                  <Text>&#9733; {item.rating.restaurant_avg_rating}</Text>
                  <Text color='gray.400'>Popularity</Text>
                </VStack>

                <VStack>
                  <Text>
                    {item.currency.symbol} {item.avg_cost_for_two}
                  </Text>
                  <Text color='gray.400'>cost for two</Text>
                </VStack>

            </HStack>

        </Box>
      </HStack>
    </Box>
  )
}
