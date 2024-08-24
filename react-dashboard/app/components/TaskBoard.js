import React, { useContext, useState } from "react";
import TaskList from "./TaskList";
import NewTaskButton from "./NewTaskButton";
import { TaskContext } from "../contexts/TaskContext";
import { useUserCheck } from "../hooks/useUserCheck";

const TaskBoard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {isLoading} = useUserCheck()


  return <div className="h-[90%] w-full bg-white">
    {!isOpen && !isLoading && (<NewTaskButton setIsOpen={setIsOpen}/>)}
   
    <TaskList isOpen={isOpen} setIsOpen={setIsOpen}/>
  </div>;
};
export default TaskBoard;
