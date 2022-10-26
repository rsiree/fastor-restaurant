import axios from "axios";
import * as types from "./actionTypes";


const getOtp=(payload)=>(dispatch)=>{
    console.log(payload)
    dispatch({type:types.OTP_REQ,payload:payload.phone});

    return axios.post("https://staging.fastor.in/v1/pwa/user/register",payload)
    .then((res)=>{
       return dispatch({type:types.OTP_SUCC,payload:res.data});
    })
    .catch((e)=>dispatch({type:types.OTP_FAIL}))
}

const otpVerify=(payload)=>(dispatch)=>{
    dispatch({type:types.LOGIN_REQ});

    return axios.post("https://staging.fastor.in/v1/pwa/user/login",payload)
    .then((res)=>{
        console.log(res,res.data.data.token)
       return dispatch({type:types.LOGIN_SUCC,payload:res.data.data.token});
    })
    .catch((e)=>dispatch({type:types.LOGIN_FAIL}))
}

export {
    getOtp,
    otpVerify
}