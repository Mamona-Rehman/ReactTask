import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const varients ={
    Taskinput: "w-5 h-5  border-slate-600 rounded-2xl bg-slate-200 mt-1",
    Primary:"h-14 font-medium shadow appearance-none border  rounded-xl w-96 py-2 px-3 text-grey-400 mb-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-100",
    Modal: 'p-2 w-96  pl-4 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400',
    second: "w-96 pl-4 pb-14 mt-2 text-sm border-b-2 opacity-80 outline-none py-5",
    ModalD: 'p-2 w-96 pb-14 pl-4 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400'
    
};
export const Input = ({
    varient="Primary",
     type,
     name,
     inputId,
     defaultValue , 
     label , 
     helperText ,
      error , 
      placeholder , 
      value , 
      onChange ,
      checked
      
    }) =>{
    return(
        <div>
            {label && <label className="block text-sm text-gray-600 font-bold mb-2">{label}</label>}

            {helperText && <label className="block text-sm text-gray-600">{helperText}</label>}
            

            <input
              checked={checked}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              id={inputId}
              placeholder={placeholder}
              defaultValue={defaultValue}
              className={` ${varients[varient]}`}

            />
            <p className="mt-2 text-sm text-red-600">{error}</p>
        </div>
    )
}

