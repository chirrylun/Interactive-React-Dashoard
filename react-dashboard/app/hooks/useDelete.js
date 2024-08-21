import { useState } from "react";

export function useDelete() {
  const [itemToDelete, setItemToDelete] = useState(null);

  const deleteItem = (index) => {
    setItemToDelete(index);
  };

  const cancelDelete = () => {
    setItemToDelete(null)
  }

  const confirmDelete =() => {
    if (itemToDelete) {
    deleteFromList(itemToDelete)
    setItemToDelete(null)
  }
}

  return {itemToDelete, deleteItem, cancelDelete, confirmDelete}
}
