"use client";
import React from "react";

import InputForm from "./InputForm";

const ProfileField = ({userName}) => {
  

  return (
    <div>
      
        <div>
          <InputForm
            userName={userName}
            setNewUserName={setNewUserName}
            placeholder={"Enter your username"}
          />

          <InputForm
            userName={userName}
            setNewUserName={setNewUserName}
            placeholder={"Enter your username"}
          />
        </div>
   
    </div>
  );
};

export default ProfileField;
