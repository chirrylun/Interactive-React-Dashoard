"use client";
import React, { useState } from "react";


const TextareaForm = ({ value, updateDetails, placeholder, field, rows }) => {
  
   const handleChange = (e) => {
    updateDetails(field, e.target.value)
   } 
  return (
    <form>
      <textarea
        type="text"
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className="p-2 my-1 font-sans rounded-md text-sm border border-black w-full"
      ></textarea>
    </form>
  );
};

export default TextareaForm;
