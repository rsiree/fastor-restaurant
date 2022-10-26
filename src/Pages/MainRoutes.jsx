import React from 'react'
import { Route, Routes } from 'react-router'
import { PrivateAuth } from '../Components/PrivateAuth'
import { LoginPage } from './LoginPage'
import { Otp } from './Otp'
import { Restaurant } from './Restaurant'
import { SingleData } from './SingleData'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/"element={<LoginPage/>}/>
        <Route path="/otp"element={<Otp/>}/>
        <Route path="/restaurant"element={
            <PrivateAuth>
                <Restaurant/>
            </PrivateAuth>
        }/>
        <Route path="/restaurant/:restaurant_id" element={<SingleData/>}/>
    </Routes>
  )
}

