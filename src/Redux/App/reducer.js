import * as types from "./actionTypes";

const initState={
    load:false,
    error:false,
    data:[]
}

export const appReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.GET_DATA_REQ:{
            return {
                ...state,
                load:true,
                error:false
            }
        };
        case types.GET_DATA_SUCC:{
            return{
                ...state,
                data:payload,
                load:false,
                error:false
            }
        };
        case types.GET_DATA_FAIL:{
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