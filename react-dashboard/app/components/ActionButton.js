import React from "react";

const ActionButton = ({ color, textColor, buttonText, handleAction }) => {
  return (
    <button
      onClick={handleAction}
      style={{ backgroundColor: color, color: textColor }}
      className="p-2 text-sm rounded-md font-sans hover:tracking-wide transition-all"
    >
      {buttonText}
    </button>
  );
};

export default ActionButton;
