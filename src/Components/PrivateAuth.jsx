import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PrivateAuth = ({children}) => {
    const {isAuth}=useSelector(state=>state.authReducer);

   if(!isAuth){
      <Navigate to="/"/>
   } 

  return (
    children
  )

}
