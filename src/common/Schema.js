import * as yup from 'yup'

const { object, string, number } = yup

const pattern = /^[a-zA-Z0-9]{3,}@[^@]+\.com$/
// const password = /^[a-zA-Z0-9]{3,10}@[^@]+\.com$/;

export const loginSchema = object({
  email: string()
    .required('Email is required. ')
    .email('Email must be valid. ')
    .matches(pattern, 'Add valid email .com. '),
  password: string().required('Password is required. '),
})

export const RegisterSchema = object({
  name: string().required('Name is required. '),
  email: string()
    .required('Email is required. ')
    .email('Email must be valid. ')
    .matches(pattern, 'Add valid email .com. '),
  password: string().required('Password is required. '),
})

export const homeSchema = object({
  c_name: string().required('Course title is required. '),
  c_description: string().required('Course description is required. '),
  c_price: string().required('Course price is required. '),
})
