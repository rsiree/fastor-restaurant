import * as types from "./actionTypes";

const initState={
    isAuth:false,
    token:"",
    load:false,
    error:false,
    data:"",
    mobile:""
}

export const authReducer=(state=initState,{type,payload})=>{
    switch(type){

        case types.OTP_REQ:{
            console.log(payload)
            return {
                ...state,
                load:true,
                error:false,
                mobile:payload
            }
        };
        case types.OTP_SUCC:{
            return {
                ...state,
                load:false,
                data:payload,
                error:false
            }
        };
        case types.OTP_FAIL:{
            return {
                ...state,
                load:false,
                error:true
            }
        };
        case types.LOGIN_REQ:{
            return {
                ...state,
                load:true,
                token:"",
            }
        };
        case types.LOGIN_SUCC:{
            console.log(payload)
            return {
                ...state,
                load:false,
                error:false,
                token:payload,
                isAuth:true
            }
        };
        case types.LOGIN_FAIL:{
            return {
                ...state,
                token:"",
                isAuth:false,
                load:false,
                error:true
            }
        }

        default:
            return state
    }
}