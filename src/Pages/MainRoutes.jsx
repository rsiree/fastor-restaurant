import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from './LoginPage'
import { Otp } from './Otp'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/"element={<LoginPage/>}/>
        <Route path="/otp"element={<Otp/>}/>
    </Routes>
  )
}

