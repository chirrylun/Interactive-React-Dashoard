"use client";
import React from "react";
import CardContainer from "./CardContainer";
import ProfileField from "./ProfileField";

import { useUserDetails } from "../hooks/useUserDetails";
import { useUserCheck } from "../hooks/useUserCheck";

const ProfileCard = () => {
  const {
    userDetails,
    updateUserDetails,
   
  } = useUserDetails();

  const {isUser, checkUser, isLoading} = useUserCheck();
 
  return (
    <div className="m-2 rounded-sm shadow-md">
      <CardContainer
        bgColor={"#FFFFFF"}
        content={
          <ProfileField
            userName={userDetails.name}
            userEmail={userDetails.email}
            updateUserDetails={updateUserDetails}
            isUserName={isUser}
            checkUser={checkUser}
            isLoading={isLoading}
            
          />
        }
      />
    </div>
  );
};

export default ProfileCard;
