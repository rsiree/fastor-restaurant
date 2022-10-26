import axios from "axios";
import * as types from "./actionTypes";

const getData=(payload)=>dispatch=>{
    console.log(payload)
    dispatch({type:types.GET_DATA_REQ});
    axios.get("https://staging.fastor.in/v1/m/restaurant?city_id=118&",
    { headers: 
        {
        "Authorization" : `Bearer ${payload}`
       } 
    })
    .then((res)=>{
        console.log(res);
        dispatch({type:types.GET_DATA_SUCC,payload:res.data});
    })
    .catch((e)=>dispatch({type:types.GET_DATA_FAIL}))
}

export {
    getData
}