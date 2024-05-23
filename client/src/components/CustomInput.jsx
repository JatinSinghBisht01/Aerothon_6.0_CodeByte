import React from 'react'

const CustomInput = ({name, type, value, onChange, required, autocomplete}) => {
  return (
    <input id={name}
        name={name}
        type={type}
        value={value} 
        onChange={onChange}
        autocomplete={autocomplete} required={required}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
         />
  )
}

export default CustomInput