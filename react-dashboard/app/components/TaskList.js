"use client";
import React, { useContext } from "react";

import { useTask } from "../hooks/useTask";

import TaskItem from "./TaskItem";

import { TaskContext } from "../contexts/TaskContext";
import { useUserCheck } from "../hooks/useUserCheck";

const TaskList = ({ isOpen, setIsOpen }) => {
  const {deleteFromList } = useTask();
  const taskList = useContext(TaskContext);
  const { isUser } = useUserCheck();

 

  if (isUser) {
    return (
      <div className="h-[99%]">
        {
          taskList.length > 0 && (
            <div className="m-2 p-2 border overflow-y-auto no-scrollbar rounded-md max-h-[100%] border-primary">
              {taskList.map((task, index) => (
                <TaskItem
                  index={index}
                  task={task}
                  deleteFromList={deleteFromList}
                />
              ))}
            </div>
          )
        }
      </div>
    );
  }
};

export default TaskList;
