"use client";
import React, { useContext, useState } from "react";
import CardContainer from "./CardContainer";
import { useTask } from "../hooks/useTask";
import Modal from "./Modal";
import NewTask from "./NewTask";
import TaskItem from "./TaskItem";
import { useAction } from "../hooks/useAction";

import ActionButton from "./ActionButton";
import { TaskContext } from "../contexts/TaskContext";
import { useUserCheck } from "../hooks/useUserCheck";

const TaskList = () => {
  const { taskInfo, updateTaskInfo, addTask, deleteFromList } = useTask();
  const taskList = useContext(TaskContext);
  const { isUser } = useUserCheck();

  const action = () => {
    if (isUser) {
      setIsOpen(true);
    }
  };

  const { handleAction } = useAction(action);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  if (isUser) {
    return (
      <div className="m-2">
        {!isOpen && (
          <CardContainer
            content={
              <ActionButton
                handleAction={handleAction}
                buttonText={"+ Create a new task"}
                textColor={"#010635"}
              />
            }
            bgColor={"#FFFFFF"}
          />
        )}

        {isOpen && (
          <div>
            <Modal
              isOpen={isOpen}
              content={
                <NewTask
                  taskName={taskInfo.taskName}
                  taskDetails={taskInfo.taskDetails}
                  setIsOpen={setIsOpen}
                  updateTaskInfo={updateTaskInfo}
                  onClose={onClose}
                  addTask={addTask}
                />
              }
            />
          </div>
        )}

        <div className="">
          {taskList.map((task, index) => (
            <TaskItem key={index} task={task} deleteFromList={deleteFromList} />
          ))}
        </div>
      </div>
    );
  }
};

export default TaskList;
