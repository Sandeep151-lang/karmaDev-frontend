import axios from 'axios'
import React, { useState } from 'react'
import api from '../../Axios/Axios'
import { useNavigate } from 'react-router-dom'

const useRegister = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (value) => {
    try {
      const payload = {
        ...value,
      }
      const resp = await api.post(`/user/register`, payload)
      if (resp) {
        navigate('/login')
      }
    } catch (error) {}
  }
  return {
    onSubmit,
    loading,
  }
}

export default useRegister
