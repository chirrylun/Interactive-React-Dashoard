"use client";
import React, { useState } from "react";
import CardContainer from "./CardContainer";
import { useTask } from "../hooks/useTask";
import Modal from "./Modal";
import NewTask from "./NewTask";
import { useCount } from "../hooks/useCount";
import { useAction } from "../hooks/useAction";
import { useUserDetails } from "../hooks/useUserDetails";
import ActionButton from "./ActionButton";

const TaskList = () => {
  const { taskInfo, updateTaskInfo} = useTask();
  const {taskCount} = useCount();
  const { isUserName } = useUserDetails();

  const action = () => {
    if (isUserName) {
      setIsOpen(true);
    }
  };
  const { handleAction } = useAction(action);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  if (isUserName) {
    return (
      <div>
        {taskCount <= 0 && !isOpen ? (
          <div className="m-2">
            <CardContainer
              content={
                <ActionButton
                  handleAction={handleAction}
                  buttonText={"+ Create a new task"}
                />
              }
              bgColor={"#FFFFFF"}
            />
          </div>
        ) : (
          <p></p>
        )}
        {isOpen && (
          <div className="m-2">
            <Modal
              isOpen={isOpen}
              content={
                <NewTask
                  taskName={taskInfo.taskName}
                  taskDetails={taskInfo.taskDetails}
                  setIsOpen={setIsOpen}
                  updateTaskInfo={updateTaskInfo}
                  onClose={onClose}
                />
              }
            />
          </div>
        )}
      </div>
    );
  }
};

export default TaskList;
