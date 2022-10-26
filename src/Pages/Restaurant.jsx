import { Flex } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '../Components/Card';
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

  return (
    <div>Restaurant

        <Flex 
        direction={'column'}
        border='1px solid red'
        margin='auto'
        w='800px'
        p='2%'
        >
        {data?.map((e)=>(
            <Card item={e}></Card>
        ))}
        </Flex>
    </div>
  )
}
