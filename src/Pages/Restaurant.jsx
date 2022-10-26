import { Box, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import { Card } from '../Components/Card';
import Carousel from '../Components/Caurosel';
import { Navbar } from '../Components/Navbar';
import { getData } from '../Redux/App/action';

export const Restaurant = () => {

    const {token}=useSelector(state=>state.authReducer);
    const {data}=useSelector(state=>state.appReducer);
    console.log("token",data)
    const dispatch=useDispatch();

    const [restaurantData,setRestaurantData]=useState(data||[]);

    useEffect(()=>{
        // if(restaurantData.length===0){
           dispatch(getData(token));
        // };
        console.log(restaurantData,"data")
    },[restaurantData,token]);

    if(!token){
        return <Navigate to="/"/>
    }
    
  return (
    <Box
    w='100%'
    minH='800px'
    bgGradient='linear(to-l, gray.400, yellow.100)'
    >
     
     <Navbar/>

     <Box p='2%' m='auto' w='70%' >
        <HStack gap='20%' flexBasis={'100px'}>

            <VStack 
            border='1px solid lightgray' 
            borderRadius={'10px'}
            p='5%'
            backgroundColor={'lightgray'}>
                <Text fontSize="2xl" color={'gray.600'}>Sireesha</Text>
                <Text fontSize="1xl">Let's explore this day</Text>
            </VStack>

            <HStack gap='15%'>
                <VStack>
                <Image src="" alt='offers'/>
                <Text>Offers</Text>
                </VStack>
                <VStack>
                <Image src="" alt='wallet'/>
                <Text>Wallet</Text>
                </VStack>
            </HStack>
        </HStack>
     </Box>


      
       <Box p='2%'>
        <Text fontSize={'2xl'} textAlign='left'>Your taste</Text>
        <Box>

        </Box>
       </Box>


<Carousel/>

        <Flex 
        direction={'column'}
        margin='auto'
        w='800px'
        p='2%'
        >

        <Text fontSize={'2xl'} textAlign={'left'}>Popular Ones</Text>

        {data?.map((e)=>(
            <Card item={e} key={e.restaurant_id}></Card>
        ))}
        </Flex>
    </Box>
  )
}
