import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// const token = true
const Private = () => {
  const token = localStorage.getItem('token')

  return !token ? <Outlet /> : <Navigate to={'/home'} />
}

export default Private
