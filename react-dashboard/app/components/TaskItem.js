import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDelete } from "../hooks/useDelete";
import { TaskContext } from "../contexts/TaskContext";

const TaskItem = ({ index, task, deleteFromList }) => {
  const taskList = useContext(TaskContext);
  const { deleteItem, itemToDelete, cancelDelete } = useDelete(deleteFromList);

  return (
    <div className="bg-white border border-nav transition-all duration-300 hover:shadow-md flex flex-col gap-4 justify-between rounded-md my-2 p-2 font-sans">
      {!itemToDelete ? (
        <div className="">
          <div className="border rounded-md mb-2 inline-block border-primary">
            <h1 className=" p-1  font-sans text-primary ">Task {index}</h1>
          </div>
          <div>
            <div className="flex gap-2 mb-2 text-primary">
              Task name:
              <h1 className="text-primary">{task.taskName}</h1>
            </div>

            <div className="flex gap-2 text-primary">
              Task details:
              <p className="text-primary font-light">{task.taskDetails}</p>
            </div>
          </div>

          <div className="flex justify-between mt-3">
            <div className="flex items-center gap-1 p-2 rounded-md">
              <FaEdit color="#010635" size={15} />
              <p className="font-sans text-primary text-sm">Edit Task</p>
            </div>

            <button
              onClick={deleteItem}
              className="flex items-center bg-primary p-2 gap-1 rounded-md"
            >
              <MdDelete color="#FFFFFF" size={15} />
              <p className="font-sans text-white text-sm">Delete Task</p>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-primary font-bold">Delete Task</h1>
            <p className="text-primary font-light">
              Are you sure you want to delete this task?
            </p>
          </div>

          <div className="flex items-center  justify-between">
            <button
              onClick={cancelDelete}
              className="flex mt-3 text-right  p-2 rounded-md"
            >
              <p className="font-sans text-primary text-sm">Cancel</p>
            </button>

            <button
              onClick={deleteFromList}
              className="flex mt-3 text-right bg-primary p-2 rounded-md"
            >
              <p className="font-sans text-white text-sm">Confirm</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
