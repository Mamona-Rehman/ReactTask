import React from "react";

const varients = {
  primary:
    "bg-black text-white rounded-full  hover:anabled:bg-indigo-700 focus:ring-indigo-500 h-14 w-96" ,
    cancelbutton:"bg-white text-black hover:anabled:bg-indigo-700 focus:ring-indigo-500 rounded-3xl h-14 w-96 font-bold text-bse",
    Tbutton:"rounded-r-full bg-black text-white text-lg font-semibold h-14 w-64 mt-11  ",
    Lbutton:"rounded-r-full bg-white text-black text-lg font-bold h-14 w-64 mt-9 hover:bg-black hover:text-white ",
  danger: "bg-red-600 text-white hover:anabled:bg-red-700 focus:ring-red-500",
  naked: "hover:text-gray-600 text-gray-500 shadow-none",
};

const sizes = {
  small: "px-2 py-1 text-xs leading-1",
  medium: "px-4 py-2 text-sm ",
  large: "px-4 py-2 text-base ",
};

export const Button = ({
  className,
  varient = "primary",
  size = "small",
  ...props
}) => {
  return (
    <button
      className={`inline-flex justify-center  items-center  border border-transparent
             rounded-md font-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2
             disabled:opactiy-50 disabled:cursor-not-allowed
             ${className}
             ${varients[varient]}
             ${sizes[size]}
             `}
      {...props}
    />
  );
};
