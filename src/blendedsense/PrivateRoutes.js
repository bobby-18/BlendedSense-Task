import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";
function PrivateRoutes() {
   const data = useSelector((state) => state.token); 

  return (
    data ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes



