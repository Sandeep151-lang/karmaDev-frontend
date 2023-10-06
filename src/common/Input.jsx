import React from 'react'

const Input = ({
  className,
  onChange,
  value,
  error,
  placeholder,
  message,
  label,
  classname,
  type,
  mandatory,
  onchange,
  children,
  ...rest
}) => {
  return (
    <>
      <div className="relative">
        {label && (
          <label
            htmlFor="username"
            className={`${classname} float-left text-sm font-medium text-gray-600`}
          >
            {label}
          </label>
        )}
        {mandatory && <span className="float-left ml-1 text-red-400">*</span>}
        {children}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500 ring-1"
          {...rest}
        />
        {error && <span className="float-left font-semibold text-sm text-rose-500">{error}</span>}
      </div>
    </>
  )
}

export default Input
