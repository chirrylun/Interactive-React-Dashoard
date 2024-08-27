"use client";
import React from "react";
import Hub from "./Hub";
import TaskBoard from "./TaskBoard";
import { TaskContext } from "../contexts/TaskContext";
import { UserContext } from "../contexts/UserContext";
import { useTask } from "../hooks/useTask";
import { useUserCheck } from "../hooks/useUserCheck";

const Dashboard = () => {
  const { taskList } = useTask();
  const {isUser} = useUserCheck();
  return (
    <div className="h-screen flex ">
      <TaskContext.Provider value={taskList}>
        <UserContext.Provider value={isUser}>
        <Hub />
        <TaskBoard />
        </UserContext.Provider>
      </TaskContext.Provider>
    </div>
  );
};

export default Dashboard;
