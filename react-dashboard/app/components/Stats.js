import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Stats = () => {
    const taskList = useContext(TaskContext)
  return (
    <div>
        {taskList.length > 0 ? (
    <h1 className="text-primary font-sans text-4 p-2">Created Tasks: {taskList.length}</h1>
): (
    <p className="text-sm text-primary">You currently have no created tasks.</p>
)}
      
    </div>
  );
};

export default Stats;
