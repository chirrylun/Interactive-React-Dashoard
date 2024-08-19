import React from "react";

const CardContainer = ({ content, bgColor }) => {
  return <div className="p-2 rounded-md" style={{backgroundColor: bgColor}}>{content}</div>;
};

export default CardContainer;
