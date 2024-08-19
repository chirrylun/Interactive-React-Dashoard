"use client";

export function useAction(action) {
  const handleAction = () => {
    if (action) {
      action();
    }
  };

  return {handleAction};
}
