import React from "react";

const CardContainer = ({ content, bgColor, borderColor }) => {
  return <div className="p-2 font-sans rounded-md" style={{backgroundColor: bgColor}}>{content}</div>;
};

export default CardContainer;
