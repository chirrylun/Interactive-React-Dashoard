import React from "react";

const SubmitButton = ({ color, textColor }) => {
  return (
    <button
      style={{ backgroundColor: color, color: textColor }}
      className="px-2 py-1 text-sm rounded-md mt-2 font-sans hover:px-3 transition-all"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
