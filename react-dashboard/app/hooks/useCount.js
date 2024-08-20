import React, { useEffect, useState } from "react";
import { useTask } from "./useTask";

export function useCount() {
  const { taskList } = useTask();
  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    try {
      if (taskList) {
        setTaskCount(taskList.length);
      }
    } catch (error) {
      if (error) {
        console.log("error", error);
      }
    }
  }, []);

  return {taskCount};
}
