import React from "react";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import ActionButton from "./ActionButton";
import { useAction } from "../hooks/useAction";
import { useSubmit } from "../hooks/useSubmit";

const NewTask = ({ onClose, updateTaskInfo, taskName, taskDetails, addTask }) => {
  const action = async () => {
    onClose();
  };

  const { handleAction } = useAction(action);
  const initialState = { name: taskName, details: taskDetails };
  const onSubmit = async () => {
    addTask()
    onClose()
  };

  return (
    <div>
      <InputForm
        updateDetails={updateTaskInfo}
        value={taskName}
        field={"taskName"}
        placeholder={"Enter the task name"}
      />
      <TextareaForm
        updateDetails={updateTaskInfo}
        value={taskDetails}
        field={"taskDetails"}
        rows={3}
        placeholder={"Enter the task details (max 100 characters)."}
      />
      <div className="flex justify-between mt-2">
        <ActionButton
          buttonText={"Close"}
          color={"#FFFFFF"}
          textColor={"#010635"}
          handleAction={handleAction}
        />
        {taskName && taskDetails && (
          <ActionButton
            buttonText={"Submit"}
            color={"#010635"}
            textColor={"#FFFFFF"}
            handleAction={onSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default NewTask;
