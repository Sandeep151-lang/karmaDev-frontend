import React from 'react'

const Input = ({ label, placeholder, type = 'text', onChange, rest }) => {
  return (
    <label class="block">
      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {label}
      </span>
      <input
        type={type}
        name="email"
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </label>
  )
}

export default Input
