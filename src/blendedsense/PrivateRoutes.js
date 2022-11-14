import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
function PrivateRoutes() {
 
   
    const data=localStorage.getItem('token')
  return (
     data ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes



