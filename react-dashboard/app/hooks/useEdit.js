import { useState } from "react";
import { useTask } from "./useTask";

export function useEdit() {
    const {taskList, setTaskList} = useTask()
    const {refreshList} = useTask()
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState({ taskName: "", taskDetails: "" });

  const checkEditItem = (item) => {
    setIsEditing(true);
    setItemToEdit(item);
    setEditingItem({taskName: item.taskName, taskDetails: item.taskDetails})
  };

  const confirmEdit = (index, updatedTask) => {
    
    const updatedTaskList = [...taskList]
    updatedTaskList[index] = updatedTask
    setTaskList(updatedTaskList);
    localStorage.setItem("tasks", JSON.stringify(updatedTaskList) || [])
    setEditingItem({taskName: "", taskDetails: ""})
    setIsEditing(false)
    refreshList()
  };

  const cancelEdit = () => {
    setIsEditing(false)
    setItemToEdit(null)
  }

  const editItem = (field, value) => {
    setEditingItem(prev => ({...prev, [field]: value}))
  };

  return { isEditing, editingItem, editItem, confirmEdit, cancelEdit, checkEditItem };
}
