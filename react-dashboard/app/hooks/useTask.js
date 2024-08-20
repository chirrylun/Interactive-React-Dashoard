"use client";
import React, { useState, useEffect } from "react";

export function useTask() {

  const [taskInfo, setTaskInfo] = useState({ taskName: "", taskDetails: "" });
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const storedTaskList = localStorage.getItem("tasks");

    setTaskList(storedTaskList || "");
  }, []);

  const updateTaskInfo = (field, value) => {
    setTaskInfo((prev) => ({ ...prev, [field]: value }));
  };

  const addTask = () => {
    if (taskInfo.taskName && taskInfo.taskDetails) {
      setTaskList([...taskList, taskInfo]);
      setTaskInfo({
        taskName: "",
        taskDetails: "",
      });
    }
  };

  return { taskInfo, updateTaskInfo, taskList, addTask };
}
