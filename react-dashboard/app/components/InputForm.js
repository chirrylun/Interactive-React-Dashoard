"use client";
import React, { useState } from "react";


const InputForm = ({ value, updateUserDetails, placeholder, submitName }) => {
  
   const handleChange = (e) => {
    updateUserDetails(field, e.target.value)
   } 
  return (
    <form>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="p-2 my-1 font-sans rounded-md text-sm border border-black w-full"
      ></input>
    </form>
  );
};

export default InputForm;
