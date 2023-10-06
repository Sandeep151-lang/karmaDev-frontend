import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import React from 'react'

const BASE_URL = 'http://localhost:2000' // replace with your API's base URL

const token = localStorage.getItem('token')

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
const Error = (error) => {
  console.log(error,"ddd")
  // if(error.message === "Network Error")
  if (error.response.status === 401 || 403 ) {
    localStorage.removeItem('token')
    window.location.replace('/login')
  }
}

const api = {
  get: (url, config = {}) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .get(url, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(Error(error)))
    })
  },
  post: (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .post(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(Error(error)))
    })
  },
  put: (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .put(url, data, config)
        .then((response) => resolve(response.data))
        .catch((error) => reject(Error(error)))
    })
  },
  delete: (url, config = {}) => {
    return new Promise((resolve, reject) => {
      axiosInstance
        .delete(url, config)
        .then(() => resolve('Deleted successfully'))
        .catch((error) => reject(Error(error)))
    })
  },
}

export default api
