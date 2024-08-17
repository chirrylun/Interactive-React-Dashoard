import React from "react";
import  useUserName  from "../hooks/useUserName";

const NameBar = () => {
  const { userName, isUserName, setNewUserName } = useUserName;

  return (
    <div>
      <div className="rounded-full border-2 border-nav w-20 h-20"></div>
    </div>
  );
};

export default NameBar;
