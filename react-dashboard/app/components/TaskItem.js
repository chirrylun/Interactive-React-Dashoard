import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDelete } from "../hooks/useDelete";
import { TaskContext } from "../contexts/TaskContext";

const TaskItem = ({ key, task, deleteFromList }) => {
    const taskList = useContext(TaskContext)
    const {deleteItem} = useDelete();
    
  return (
    <div key={key} className="bg-white flex flex-col gap-4 items-start justify-between rounded-md my-2 p-2 font-sans">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-primary font-bold">{task.taskName}</h1>
          <p className="text-primary font-light">{task.taskDetails}</p>
        </div>

        <div className="rounded-full border border-primary w-[20px] h-[20px]">
          <p className="font-sans text-primary">{key}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 border border-primary  p-2 rounded-md">
          <FaEdit color="#010635" size={15} />
          <p className="font-sans text-primary text-sm">Edit Task</p>
        </div>

        <button
          onClick={deleteFromList}
          className="flex items-center bg-primary gap-1  p-2 rounded-md"
        >
          <MdDelete color="#FFFFFF" size={15} />
          <p className="font-sans text-white text-sm">Delete Task</p>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
