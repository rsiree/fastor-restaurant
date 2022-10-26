import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const PrivateAuth = ({children}) => {
    const {isAuth,token}=useSelector(state=>state.authReducer);
    console.log("hi",token,isAuth)
   
   if(!isAuth){
      <Navigate to="/" replace={true}/>
   } 

  return children;

}
