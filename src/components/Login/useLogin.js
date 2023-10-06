import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import api from '../../Axios/Axios'
const useLogin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()

  const onSubmit = async (value) => {
    try {
      const payload = {
        ...value,
      }
      const resp = await api.post(`/user/login`, payload)
      if (resp) {
        localStorage.setItem('token', resp?.token)
        window.location.replace('/home')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return {
    onSubmit,
    loading,
    setLoading,
  }
}

export default useLogin
