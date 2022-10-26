import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginPage } from './LoginPage'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/"element={<LoginPage/>}/>

    </Routes>
  )
}

