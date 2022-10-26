import * as types from "./actionTypes";

const initState={
    isAuth:false,
    load:false,
    error:false,
    data:""
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){

        case types.OTP_REQ:{
            return {
                ...state,
                load:true,
                error:false
            }
        };
        case types.OTP_SUCC:{
            return {
                ...state,
                load:false,
                data:payload
            }
        };
        case types.OTP_FAIL:{
            return {
                ...state,
                load:false,
                error:true
            }
        }
        default:
            return state
    }
}