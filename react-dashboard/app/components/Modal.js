import React from "react";



const Modal = ({ isOpen, content }) => {


  if (isOpen) {
    return (
      <div className="transition-opacity bg-white rounded-md p-2 duration-300 items-center text-right">
        {content}
      </div>
    );
  }
};
export default Modal;
