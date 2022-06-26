import React from 'react'
import {useField, ErrorMessage} from 'formik'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        
      <div className="mb-2">
        <label htmlFor={field.name}>{label}</label>
        
        <div className="mb-3 flex justify-center ">
            <div className="bg-tertiary w-6 rounded-l flex justify-center items-center pl-3">
            </div>
        
        <input
          className={`p-2 w-60 outline-none rounded-r text-sm  text-black font-bold placeholder:text-slate-500 bg-tertiary placeholder:pl-2 " ${meta.touched && meta.error && 'is-invalid'}`}
          {...field} {...props}
          autoComplete="off"
        />

        </div>

        <ErrorMessage component="div" name={field.name} className= "text-red-400" />
      </div>
    )
  }