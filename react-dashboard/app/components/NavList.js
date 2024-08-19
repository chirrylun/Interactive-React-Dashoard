"use client";
import React from "react";
import CardContainer from "./CardContainer";
import { useTask } from "../hooks/useTask";
import { useSubmit } from "../hooks/useSubmit";
import { useUserDetails } from "../hooks/useUserDetails";
import ActionButton from "./ActionButton";

const NavList = () => {
  const { taskCount, setTaskCount } = useTask();
  const { isUserName } = useUserDetails();

  if (isUserName) {
    return (
      <div className="m-2">
        {taskCount <= 0 ? (
          <CardContainer
            content={<ActionButton buttonText={"+ Create a new task"} />}
            bgColor={"#FFFFFF"}
          />
        ) : (
          <p>Task</p>
        )}
      </div>
    );
  }
};

export default NavList;
