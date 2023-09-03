import "../assets/css/modal.scss";

import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className='overlay-modal' onClick={onClose}>
          <div className='modal'>
            {children}
            <span className='close' onClick={onClose}>
              x
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
