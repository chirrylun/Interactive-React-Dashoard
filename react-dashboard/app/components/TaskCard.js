import React from "react";

const TaskCard = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default TaskCard;
