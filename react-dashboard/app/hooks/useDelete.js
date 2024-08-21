import { useState } from "react";

export function useDelete() {
  const [itemToDelete, setItemToDelete] = useState(null);

  const deleteItem = (index) => {
    setItemToDelete(index);
  };

  const confirmDelete =() => {
    if (itemToDelete) {
    deleteFromList(itemToDelete)
    setItemToDelete(null)
  }
}

  return {itemToDelete, deleteItem, confirmDelete}
}
