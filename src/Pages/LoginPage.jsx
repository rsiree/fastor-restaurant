import { Box, FormLabel,  Input,  Text,FormControl, Button, FormErrorMessage } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getOtp} from "../Redux/Auth/action";
import { OTP_SUCC } from '../Redux/Auth/actionTypes';

export const LoginPage = () => {

    const [mobileNo,setMobileNo]=useState("");
    const [errMsg,setErrMsg]=useState("");
    const{load,data} = useSelector(state=>state.authReducer);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=()=>{
        console.log(mobileNo.length,mobileNo)
       if(mobileNo.length===10){

        const params={
            phone:mobileNo,
            dial_code: "+91"
        }
        console.log(params);
        dispatch(getOtp(params))
        .then((res)=>{
            if(res.type===OTP_SUCC){
                alert("otp sent");
                navigate("/otp")
            }
        })

       }else{
          setErrMsg("Please enter 10 digit mobile number");
       }
       console.log(errMsg)
    }

  return (
    <Box 
    w='100%'
    minH='800px'
    bgGradient='linear(to-l, gray.400, yellow.300)'
    >
        <Box 
        w='600px'
        h='max-content'
        margin="auto"
        padding={'15% 10%'}
        >
          <FormControl >
            <FormLabel fontSize='36px' >Enter Your Mobile Number</FormLabel>
            <FormLabel color='gray' fontSize='16px'>We will send you 4 digit verification code</FormLabel>
            <br/>

            <Input  
            border='1px solid gray'
            placeholder='Enter your mobile number'
            onChange={(e)=>setMobileNo(e.target.value)}
            />


            {errMsg && <Text as='p' color='red'>{errMsg}</Text>}

            <Button 
            colorScheme='red'
            marginTop='4%'
            w='400px'
            onClick={handleSubmit}
            >
               {load?"Sending":"Send Code"} 
            </Button>
            
          </FormControl>
        </Box>
        
    </Box>
  )
}
