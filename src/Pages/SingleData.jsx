import { Box, Image, Text,HStack, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getData } from '../Redux/App/action';
import FastorLogo from "./FastorLogo.png"

export const SingleData = () => {

    const params=useParams();
    console.log(params.restaurant_id);

    const {data}=useSelector(state=>state.appReducer);
    const {token}=useSelector(state=>state.authReducer);
    const dispatch=useDispatch();
    const location=useLocation()

    useEffect(()=>{
        if(data.length===0){
          dispatch(getData(token));
        }
    },[data.length]);

    const shareImage=()=>{
          
    }


  return (
    <Box>
        {data?.filter((e)=>e.restaurant_id==params.restaurant_id).map((item)=>(
            <Box key={item.restaurant_id}>
            <Box 
            backgroundImage={item.images[0].url}
            w='400px'
            h='400px'
            margin='auto'
            onClick={shareImage}
            >
                <Image 
                src={FastorLogo}
                position='absolute'
                opacity='0.6'
                w='200px'
                left='40%'
                bottom='40%'
                />
            </Box>
            <Text fontSize='2xl'>{item.restaurant_name}</Text>

            <HStack wrap={'wrap'} justify='center'>
                {item.cuisines?.map((e)=>(
                   <Text color='gray' key={e.cuisine_id}>{e.cuisine_name},</Text>
                ))}
            </HStack>

            {item.location? 
            <Text  color='gray.800' >
                {item.location.location_address}, {item.location.location_address_2}, {item.location.location_locality}, {item.location.city_name}, {item.location.state_name}
            </Text>
            :""
            }

            <HStack gap='5%' color='gray.500' justify='center'>
                <HStack><Text>Opens:</Text> <Text color='red.400'>{item.opens_at}</Text></HStack>
                <HStack><Text>Closes: </Text><Text color='red.200'>{item.closes_at}</Text></HStack>
            </HStack>

            <HStack justify='center' gap='20%'>

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
        )
        )}
      <Image/>
    </Box>
  )
}
