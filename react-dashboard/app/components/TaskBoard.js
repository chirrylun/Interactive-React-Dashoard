import React, { useContext, useState } from "react";
import TaskList from "./TaskList";
import NewTaskButton from "./NewTaskButton";
import NewTask from "./NewTask";
import { useTask } from "../hooks/useTask";
import { useUserCheck } from "../hooks/useUserCheck";
import { UserContext } from "../contexts/UserContext";

const TaskBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { taskInfo, updateTaskInfo, addTask, deleteFromList } = useTask();
  const onClose = () => {
    setIsOpen(false);
  };
  const { isLoading } = useUserCheck();
  const isUser =useContext(UserContext)

  console.log("is User is", isUser)
  const projectConcepts = [
    "Javascript",
    "Next.js",
    "React fundamentals",
    "State management",
    "Reusable components",
    
    "Tailwind CSS & Styling",
  ];

  console.log("is User is", isUser)

  return (
    <div className="w-full">
      {!isOpen && isUser && !isLoading && (
        <div className="h-[90%] bg-white">
          <NewTaskButton setIsOpen={setIsOpen} />

          <TaskList isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        
      )}
      <NewTask isOpen={isOpen} onClose={onClose} addTask={addTask} taskName={taskInfo.taskName} taskDetails={taskInfo.taskDetails} updateTaskInfo={updateTaskInfo}/> 
      
      {!isUser && (
        <div className="font-sans h-screen flex flex-col justify-center items-center bg-primary">
          <div className="text-left text-white hover:text-primary transition-all duration-300 border-white border p-6 hover:shadow-sm hover:bg-white rounded-md">
            <h1 className=" text-4xl font-semibold mb-2">
              Interactive React Task Manager
            </h1>
            <p className="font-light">This project showcases my use of;</p>

            <div className="grid-cols-2 grid mt-4">
              {projectConcepts.map((item, index) => (
                <p className="my-2 text-sm font-light" key={index}>
                  {item}
                </p>
              ))}
            </div>

            <div>
                <p className="mt-4 font-bold text-xl ">Create a new profile to get started</p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};
export default TaskBoard;
