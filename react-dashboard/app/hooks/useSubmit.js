import { useState } from "react";

export function useSubmit(initialState = {}, onSubmit) {
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = () => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return {formData, handleSubmit}
}
