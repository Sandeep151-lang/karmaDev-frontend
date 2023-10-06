import React, { useState } from 'react'
import Input from '../../common/Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../../common/Schema'
import useRegister from './useRegister'
import SlashPassword from '../../icons/eyeSlashIcon'
import PasswordIcon from '../../icons/passwordIcon'
import EmailIcon from '../../icons/email'
import { Link } from 'react-router-dom'

const Register = () => {
  const [password, setpassword] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  })

  const { onSubmit } = useRegister()

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-md shadow-md">
          <h2 className="text-3xl font-extrabold text-center text-gray-800">Register</h2>
          <Input
            placeholder="Name"
            label="Name"
            rest={register('name')}
            value={watch('name')}
            error={errors?.name?.message}
            onChange={(e) => {
              setValue('name', e?.target?.value)
              clearErrors('name')
            }}
            type="text"
            mandatory
          />

          <Input
            placeholder="Email"
            label="Email"
            rest={register('email')}
            value={watch('email')}
            error={errors?.email?.message}
            onChange={(e) => {
              setValue('email', e?.target?.value)
              clearErrors('email')
            }}
            type="email"
            mandatory
            children={<EmailIcon className="absolute right-3 bottom-3" />}
          />
          <Input
            placeholder="password"
            label="password"
            rest={register('password')}
            value={watch('password')}
            error={errors?.password?.message}
            onChange={(e) => {
              setValue('password', e?.target?.value)
              clearErrors('password')
            }}
            type={!password ? 'password' : 'text'}
            mandatory
            children={
              <>
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
              </>
            }
          />
          <div>
            <p className="float-right text-sm ">
              Already have an account{' '}
              <Link to="/login" className="text-blue-700 font-semibold">
                LogIn
              </Link>{' '}
            </p>
          </div>
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="bg-blue-500 w-full text-white p-2 rounded-md 
            hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Register
          </button>
        </div>
      </div>
    </>
  )
}

export default Register
