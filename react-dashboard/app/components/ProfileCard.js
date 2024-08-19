"use client";
import React from "react";
import CardContainer from "./CardContainer";
import ProfileField from "./ProfileField";

import { useUserDetails } from "../hooks/useUserDetails";

const ProfileCard = () => {
  const {
    userDetails,
    isUserName,
    updateUserDetails,
   
  } = useUserDetails();

  return (
    <div className="m-2 rounded-sm shadow-md">
      <CardContainer
        bgColor={"#FFFFFF"}
        content={
          <ProfileField
            userName={userDetails.name}
            userEmail={userDetails.email}
            updateUserDetails={updateUserDetails}
            isUserName={isUserName}
            
          />
        }
      />
    </div>
  );
};

export default ProfileCard;
