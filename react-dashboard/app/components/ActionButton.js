import React from "react";

const ActionButton = ({ color, textColor, buttonText, handleAction, icon }) => {
  return (
    <button
      onClick={handleAction}
      style={{ backgroundColor: color, color: textColor }}
      className="p-2 flex items-center gap-2 text-sm rounded-md font-sans hover:tracking-wide transition-all"
    >
      {icon && icon}
      {buttonText}
    </button>
  );
};

export default ActionButton;
