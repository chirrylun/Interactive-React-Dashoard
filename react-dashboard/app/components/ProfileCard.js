'use client'
import React from "react";
import CardContainer from "./CardContainer";
import ProfileField from "./ProfileField";
import SubmitButton from "./SubmitButton";
import { useUserName } from "../hooks/useUserName";


const ProfileCard = () => {
  const { userName, isUserName, setNewUserName, submitInfo } = useUserName();
 

  return (
    <div className="p-2 bg-white m-2 rounded-sm shadow-md">
      <h1 className="font-sans text-primary text-md my-2">
        Create a new profile to get started
      </h1>
      <CardContainer content={<ProfileField userName={userName} setNewUserName={setNewUserName}/>} />
      <SubmitButton color={"#010635"} textColor={"#FFFFFF"}/>
    </div>
  );
};

export default ProfileCard;
