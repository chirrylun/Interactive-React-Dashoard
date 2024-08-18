"use client";
import React, { useState } from "react";

const InputForm = ({ userName, setNewUserName, placeholder, submitName }) => {
  return (
    <form>
      <input
        type="text"
        value={userName}
        placeholder={placeholder}
        onChange={(e) => setNewUserName(e.target.value)}
        className="p-2 my-1 font-sans rounded-md text-sm border-2 border-black w-full"
      ></input>
    </form>
  );
};

export default InputForm;
