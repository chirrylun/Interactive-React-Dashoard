"use client";
import { useEffect } from "react";
import { useTask } from "./useTask";

export function useRefreshList() {
  const { taskList, refreshList } = useTask();
  useEffect(() => {
    refreshList();
  }, [taskList]);

  

  return {refreshList}
}
