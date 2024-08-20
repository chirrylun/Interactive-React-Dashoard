import React from "react";
import ProfileCard from "./ProfileCard";
import TaskList from "./TaskList";

const Hub = () => {
  return (
    <div className="bg-primary w-[20%]">
      <div>
        <ProfileCard />

        <TaskList />
      </div>
    </div>
  );
};

export default Hub;
