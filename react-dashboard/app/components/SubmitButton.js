import React from "react";

const SubmitButton = ({ color, textColor, buttonText, handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit}
      style={{ backgroundColor: color, color: textColor }}
      className="p-2 w-full text-sm rounded-md font-sans hover:tracking-wide transition-all"
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
