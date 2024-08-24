import React from "react";
import ProfileCard from "./ProfileCard";
import StatBoard from "./Statboard";

const Hub = () => {
  return (
    <div className="bg-primary w-[20%]">
      <div>
        <ProfileCard />
        <StatBoard/>
        
      </div>
    </div>
  );
};

export default Hub;
