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
    refreshDetails
  } = useUserDetails();

  const {isUser, setIsUser, checkUser, isLoading} = useUserCheck();

  console.log("user details is", userDetails.name)
 
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
            setIsUser={setIsUser}
            refreshDetails={refreshDetails}
            
          />
        }
      />
    </div>
  );
};

export default ProfileCard;
