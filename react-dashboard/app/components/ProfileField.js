"use client";
import React from "react";
import SubmitButton from "./SubmitButton";
import CardContainer from "./CardContainer";
import UserBar from "./UserBar";
import InputForm from "./InputForm";
import { useSubmit } from "../hooks/useSubmit";

const ProfileField = ({
  userName,
  userEmail,
  updateUserDetails,
  isUserName,
  checkUser
}) => {
  console.log("is",userName)
  const initialState = { name: userName, email: userEmail };
  const onSubmit = async () => {
 
    localStorage.setItem("username", userName);
    localStorage.setItem("useremail", userEmail);
    checkUser()

  };
  const { formData, handleSubmit } = useSubmit(initialState, onSubmit);

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

          <h1 className="font-sans text-primary text-md my-2">
            Create a new profile to get started
          </h1>
          <div>
            <InputForm
              value={userName}
              field={"name"}
              updateDetails={updateUserDetails}
              placeholder={"Enter your username"}
            />

            <InputForm
              value={userEmail}
              field={"email"}
              updateDetails={updateUserDetails}
              placeholder={"Enter your email"}
            />

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
