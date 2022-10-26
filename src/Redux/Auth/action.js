import axios from "axios";
import * as types from "./actionTypes";


const getOtp=(payload)=>(dispatch)=>{
    dispatch({type:types.OTP_REQ});

    return axios.post("https://staging.fastor.in/v1/pwa/user/register",payload)
    .then((res)=>{
       return dispatch({type:types.OTP_SUCC,payload:res.data});
    })
    .catch((e)=>dispatch({type:types.OTP_FAIL}))
}

export {
    getOtp
}