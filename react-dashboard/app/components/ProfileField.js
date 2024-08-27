"use client";
import React from "react";
import SubmitButton from "./SubmitButton";
import CardContainer from "./CardContainer";
import UserBar from "./UserBar";
import InputForm from "./InputForm";
import LoadingBar from "./LoadingBar";
import { useSubmit } from "../hooks/useSubmit";

const ProfileField = ({
  userName,
  userEmail,
  updateUserDetails,
  isUserName,
  refreshDetails,
  setIsUser,
  isLoading,
}) => {
  const initialState = { name: userName, email: userEmail };
  const onSubmit = async () => {
   
    localStorage.setItem("username", userName);
    localStorage.setItem("useremail", userEmail);
    refreshDetails()
    setIsUser(true);
  };
  const { formData, handleSubmit } = useSubmit(initialState, onSubmit);

  if (isLoading) {
    return <CardContainer bgColor={"FFFFFF"} content={<LoadingBar />} />;
  }
  return (
    <div>
      {!isUserName ? (
        <div>
          <CardContainer
            bgColor={"#010635"}
            content={
              <UserBar
                userName={userName}
                userEmail={userEmail}
                isUserName={isUserName}
              />
            }
          />

          <div className="mt-2">
            <div>
              <p className="text-primary mb-1">Username</p>
              <InputForm
                value={userName}
                field={"name"}
                updateDetails={updateUserDetails}
                placeholder={"Enter your username"}
              />
            </div>

            <div className="mt-3 mb-2">
              <p className="text-primary">Email</p>
              <InputForm
              value={userEmail}
              field={"email"}
              updateDetails={updateUserDetails}
              placeholder={"Enter your email"}
            />
            </div>

            

            <SubmitButton
              color={"#010635"}
              textColor={"#FFFFFF"}
              buttonText={"Create Profile"}
              handleSubmit={onSubmit}
            />
          </div>
        </div>
      ) : (
        <div>
          <CardContainer
            bgColor={"#010635"}
            content={
              <UserBar
                userName={userName}
                userEmail={userEmail}
                isUserName={isUserName}
              />
            }
          />
        </div>
      )}
    </div>
  );
};

export default ProfileField;
