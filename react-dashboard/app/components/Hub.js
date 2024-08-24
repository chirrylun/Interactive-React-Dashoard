import React from "react";
import ProfileCard from "./ProfileCard";
import StatBoard from "./Statboard";
import { useUserCheck } from "../hooks/useUserCheck";

const Hub = () => {
  const { isLoading } = useUserCheck();

  return (
    <div className="bg-primary w-[20%]">
      <div>
        <ProfileCard />
        {!isLoading && <StatBoard />}
      </div>
    </div>
  );
};

export default Hub;
