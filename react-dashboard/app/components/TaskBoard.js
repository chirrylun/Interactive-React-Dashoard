import React, { useState } from "react";
import TaskList from "./TaskList";
import NewTaskButton from "./NewTaskButton";

const TaskBoard = () => {
    const [isOpen, setIsOpen] = useState(false)


  return <div className="h-[90%] w-full bg-white">
    {!isOpen && (<NewTaskButton setIsOpen={setIsOpen}/>)}
   
    <TaskList isOpen={isOpen} setIsOpen={setIsOpen}/>
  </div>;
};
export default TaskBoard;
