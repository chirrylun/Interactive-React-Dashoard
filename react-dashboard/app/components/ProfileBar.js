"use client";
import React from "react";
import { useUserName } from "../hooks/useUserName";
import InputForm from "./InputForm";

const ProfileBar = () => {
  const { userName, isUserName, setNewUserName, submitInfo } = useUserName();

  return (
    <div>
      {isUserName ? (
        <div className="rounded-full border-2 border-nav w-20 h-20"></div>
      ) : (
        <div>
          <InputForm
            userName={userName}
            setNewUserName={setNewUserName}
            placeholder={"Enter your username"}
          />

          <InputForm
            userName={userName}
            setNewUserName={setNewUserName}
            placeholder={"Enter your email"}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileBar;
