import React, { useState } from "react";
import CardContainer from "./CardContainer";
import ActionButton from "./ActionButton";
import { useAction } from "../hooks/useAction";
import { useUserCheck } from "../hooks/useUserCheck";

const NewTaskButton =({setIsOpen})=> {
    const { isUser } = useUserCheck();

    

    const action = () => { 
        if (isUser) {
          setIsOpen(true);
        }
      };
    
      const { handleAction } = useAction(action);

    return(
        <div className="p-2">
            <CardContainer
            content={
              <ActionButton
                handleAction={handleAction}
                buttonText={"+ Create a new task"}
                textColor={"#FFFFFF"}
              />
            }
            bgColor={"#010635"}
           
          />
        </div>

    )
}
export default NewTaskButton;