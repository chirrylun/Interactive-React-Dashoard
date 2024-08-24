"use client";
import React from "react";
import Hub from "./Hub";
import TaskBoard from "./TaskBoard";
import { TaskContext } from "../contexts/TaskContext";
import { useTask } from "../hooks/useTask";

const Dashboard = () => {
  const { taskList } = useTask();
  return (
    <div className="h-screen flex ">
      <TaskContext.Provider value={taskList}>
        <Hub />
        <TaskBoard />
      </TaskContext.Provider>
    </div>
  );
};

export default Dashboard;
