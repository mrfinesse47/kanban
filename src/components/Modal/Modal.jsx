import React from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from './styles/Modal.styled';

const Modal = ({ children, setShowModal, showModal }) => {
  if (showModal === false) {
    return <></>;
  }
  return createPortal(
    <StyledModal>
      <div
        className='backdrop'
        onClick={(e) => {
          setShowModal(false);
        }}
      >
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </StyledModal>,
    document.getElementById('modal-root')
  );
};

export default Modal;
