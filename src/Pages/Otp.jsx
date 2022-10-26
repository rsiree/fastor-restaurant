import { Box, FormLabel, PinInput, PinInputField, Text,FormControl, Button, FormErrorMessage, HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {otpVerify} from "../Redux/Auth/action";
import { LOGIN_SUCC } from '../Redux/Auth/actionTypes';

export const Otp = () => {

    const [otp,setOtp]=useState("");
    const [errMsg,setErrMsg]=useState("");

    const{load,mobile} = useSelector(state=>state.authReducer);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleOtp=(e)=>{
        // e.preventDefault();
        const enteredValue=e.target.value;
        const prevValue= otp + enteredValue;
        setOtp(prevValue);
    }

    const handleSubmit=()=>{
        console.log(otp,mobile,typeof otp)
       if(otp.length===6&&otp==="123456"){

        const params={
            phone:mobile,
            dial_code: "+91",
            otp:otp
        }
        console.log(params);
        dispatch(otpVerify(params))
        .then((res)=>{
            if(res.type===LOGIN_SUCC){
                alert("Login Success");
                navigate("/restaurant",{replace:true})
            }
        })

       }else{
          setErrMsg("Please enter correct Otp");
       }
       console.log(errMsg);
       setOtp("");
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
            <FormLabel fontSize='36px' >OTP Verification</FormLabel>
            <FormLabel color='gray' fontSize='16px'>Enter the verification code we just send on your Mobile Number</FormLabel>
            <br/>

            <HStack justify='center'>
                <PinInput size='lg' placeholder={""} >
                    <PinInputField onChange={(e)=>handleOtp(e)}/>
                    <PinInputField onChange={(e)=>handleOtp(e)}/>
                    <PinInputField onChange={(e)=>handleOtp(e)}/>
                    <PinInputField onChange={(e)=>handleOtp(e)}/>
                    <PinInputField onChange={(e)=>handleOtp(e)}/>
                    <PinInputField onChange={(e)=>handleOtp(e)}/>
                </PinInput>
            </HStack>

            {errMsg && <Text as='p' color='red'>{errMsg}</Text>}

            <Button 
            colorScheme='red'
            marginTop='4%'
            w='400px'
            onClick={handleSubmit}
            >
               {load?"Verifying":"Verify"} 
            </Button>

            <FormLabel
                fontSize='14px' 
                paddingLeft='10%'
            >
                Didn't receive code? 
             <Button 
             fontSize='14px' 
             variant="link" 
             colorScheme='blue'
             paddingLeft='2%'

             >
                Resend
            </Button>
            </FormLabel>

          </FormControl>
        </Box>
        
    </Box>
  )
}
