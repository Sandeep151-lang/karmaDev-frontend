import React, { useEffect, useState } from 'react'
import PasswordIcon from '../../icons/passwordIcon'
import SlashPassword from '../../icons/eyeSlashIcon'
import EmailIcon from '../../icons/email'
import { useForm } from 'react-hook-form'
import useLogin from './useLogin'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '../../common/Schema'
import { Link } from 'react-router-dom'

const Login = () => {
  const [password, setpassword] = useState(false)

  const { onSubmit, loading, setLoading, data } = useLogin()
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Login</h2>
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="username" className="float-left text-sm font-medium text-gray-600">
              Email
            </label>
            <span className="float-left ml-1 text-red-400">*</span>
            <EmailIcon className="absolute right-3 bottom-3" />
            <input
              {...register('email')}
              value={watch('email')}
              type="text"
              id="username"
              name="username"
              placeholder="Email"
              className={`mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 ring-1`}
              onChange={(e) => {
                setValue('email', e.target.value)
                clearErrors('email')
              }}
            />
            {errors.email && (
              <p className="float-left font-semibold text-sm  text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <label htmlFor="password" className="float-left mt-2 text-sm font-medium text-gray-600">
              Password
            </label>
            <span className="float-left ml-1 mt-2 text-red-400">*</span>
            {!password ? (
              <SlashPassword
                className="absolute right-3 bottom-3 cursor-pointer"
                onClick={() => setpassword(true)}
              />
            ) : (
              <PasswordIcon
                className="absolute right-3 bottom-3 cursor-pointer"
                onClick={() => setpassword(false)}
              />
            )}
            <input
              {...register('password')}
              // value={watch('password')}
              type={password ? 'text' : 'password'}
              placeholder="Password"
              value={watch('password')}
              onChange={(e) => {
                setValue('password', e.target.value)
                clearErrors('password')
              }}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 ring-1"
            />
            {errors.password && (
              <span className="float-left font-semibold text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <p className="float-right text-sm ">
              Don't have an account please{' '}
              <Link to="/register" className="text-blue-700 font-semibold">
                Register
              </Link>
            </p>
          </div>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="bg-blue-500 w-full text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
