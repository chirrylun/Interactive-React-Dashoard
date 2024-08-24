import React, { useContext } from "react";
import ActionButton from "./ActionButton";
import { FaFilter } from "react-icons/fa6";
import { TaskContext } from "../contexts/TaskContext";

const Bar = () => {
    const taskList = useContext(TaskContext)
  return (
    <div className="h-[8%] bg-nav items-center flex justify-end p-3 gap-8 ">
     
        
     

    </div>
  );
};

export default Bar;
