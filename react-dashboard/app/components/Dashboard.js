"use client";
import React from "react";
import Hub from "./Hub";
import WorkSpace from "./WorkSpace";
import { TaskContext } from "../contexts/TaskContext";
import { useTask } from "../hooks/useTask";

const Dashboard = () => {
  const { taskList } = useTask();
  return (
    <div className="h-screen flex ">
      <TaskContext.Provider value={taskList}>
        <Hub />
        <WorkSpace />
      </TaskContext.Provider>
    </div>
  );
};

export default Dashboard;
