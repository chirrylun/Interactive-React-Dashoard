import React, { useContext } from "react";
import ActionButton from "./ActionButton";
import { FaFilter } from "react-icons/fa6";
import { TaskContext } from "../contexts/TaskContext";

const Bar = () => {
    const taskList = useContext(TaskContext)
  return (
    <div className="h-[8%] bg-nav items-center flex justify-end p-3 gap-8 ">
      <ActionButton
        color={""}
        textColor={"#010635"}
        buttonText={"+ Add a new agent"}
      />
      <ActionButton
        color={""}
        textColor={"#010635"}
        buttonText={"Filter existing agents"}
        icon={<FaFilter size={15} color="#010635"/>}
      />
      
        
     

    </div>
  );
};

export default Bar;
