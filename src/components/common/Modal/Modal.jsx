import React from 'react';
import './Modal.scss';

const Modal = ({ children, isOpen, closeModal, Modal, btnClose = true }) => {
  return (
    <>
      {isOpen ? (
        <Modal className="modal">
          {btnClose && (
            <button onClick={closeModal} className="modal__btn">
              &times;
            </button>
          )}
          {children}
        </Modal>
      ) : null}
    </>
  );
};

export default Modal;
