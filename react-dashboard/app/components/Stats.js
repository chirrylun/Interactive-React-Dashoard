import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

const Stats = () => {
    const taskList = useContext(TaskContext)
  return (
    <div>
      <h1 className="text-primary font-sans text-4 p-2">Created Tasks: {taskList.length}</h1>
    </div>
  );
};

export default Stats;
