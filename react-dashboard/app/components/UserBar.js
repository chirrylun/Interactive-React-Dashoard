import React from "react";

const Userbar = ({userName, userEmail, isUserName}) => {
  return (
    <div className="flex items-center gap-3 p-2shadow-md rounded-md">
      <div className="border border-white rounded-full w-12 h-12 justify-center items-center flex">
        <h1 className="font-sans font-bold text-xl text-white">{!isUserName ? "G": userName.slice(0, 2).toUpperCase()} </h1>
      </div>
      <div className="flex flex-col gap-1">
      <p className="font-sans text-white font-medium text-sm">{!isUserName ? "Guest User" : userName} </p>
      {isUserName && (<p className="font-sans text-white font-light text-xs">{userEmail.toLowerCase()}</p>)}
      </div>
    </div>
  );
};

export default Userbar;
