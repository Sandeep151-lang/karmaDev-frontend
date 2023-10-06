import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const LoginRoute = () => {
  const token = localStorage.getItem('token')
  console.log(token, 'token')

  return token ? <Outlet /> : <Navigate to={'/login'} />
}

export default LoginRoute
