"use client";
import { useState, useEffect } from "react";

export function useTask() {
  const [taskInfo, setTaskInfo] = useState({ taskName: "", taskDetails: "" });
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
   refreshList()
  }, []);

  const refreshList = () => {
    
    const storedTaskList = localStorage.getItem("tasks");
    setTaskList(JSON.parse(storedTaskList) || []);
  };

  const updateTaskInfo = (field, value) => {
    setTaskInfo((prev) => ({ ...prev, [field]: value }));
  };

  const addTask = () => {
    if (taskInfo.taskName && taskInfo.taskDetails) {
      const newTaskList = [...taskList, taskInfo];
      setTaskList(newTaskList);
      localStorage.setItem("tasks", JSON.stringify(newTaskList));
      setTaskInfo({
        taskName: "",
        taskDetails: "",
      });
      
    }
   
  };

  const deleteFromList = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList));
    
  };

  return {
    taskInfo,
    updateTaskInfo,
    taskList,
    setTaskList,
    addTask,
    deleteFromList,
    refreshList
  };
}
