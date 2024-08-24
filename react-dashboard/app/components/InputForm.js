"use client";
import React, { useState } from "react";


const InputForm = ({ value, updateDetails, placeholder, field }) => {
  
   const handleChange = (e) => {
    updateDetails(field, e.target.value)
   } 
  return (
    <form>
      <input
        type="text"
        
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="p-2 my-1 font-sans rounded-md text-sm border border-nav w-full"
      ></input>
    </form>
  );
};

export default InputForm;
