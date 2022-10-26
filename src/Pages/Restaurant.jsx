import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/App/action';

export const Restaurant = () => {

    const {token}=useSelector(state=>state.authReducer);
    const {data}=useSelector(state=>state.appReducer);
    console.log(token,"token")
    const dispatch=useDispatch();

    const [restaurantData,setRestaurantData]=useState(data||[]);

    useEffect(()=>{
        if(restaurantData.length===0){
           dispatch(getData(token));
           setRestaurantData(data);
        };
        console.log(restaurantData,"data")
    },[restaurantData.length])

  return (
    <div>Restaurant
        {restaurantData?.map((e)=>(
            <p>
{e.restaurant_name}
            </p>
        ))}
    </div>
  )
}
