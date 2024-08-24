import React from "react";
import InputForm from "./InputForm";
import TextareaForm from "./TextareaForm";
import ActionButton from "./ActionButton";
import { useAction } from "../hooks/useAction";

const NewTask = ({
  onClose,
  updateTaskInfo,
  taskName,
  taskDetails,
  addTask,
}) => {
  const action = async () => {
    onClose();
  };

  const { handleAction } = useAction(action);

  const onSubmit = async () => {
    await addTask();

    onClose();
  };

  return (
    <div>
      <div>
        <h1 className="text-primary text-left font-sans text-xl font-bold mb-4">
          Create a new task
        </h1>
      </div>

      <div className="mb-4">
        <p className="text-left font-sans font-normal text-primary">Task name</p>
        <InputForm
          updateDetails={updateTaskInfo}
          value={taskName}
          field={"taskName"}
          placeholder={"Enter the task name"}
        />
      </div>

      <div>
      <p className="text-left font-sans font-normal text-primary">Task details</p>
      <TextareaForm
        updateDetails={updateTaskInfo}
        value={taskDetails}
        field={"taskDetails"}
        rows={3}
        placeholder={"Enter the task details (max 100 characters)."}
      />
      </div>
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
