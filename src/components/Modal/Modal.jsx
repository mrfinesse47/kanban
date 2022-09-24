import React from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from './styles/Modal.styled';

const Modal = ({ children, setShowModal, showModal }) => {
  if (showModal) {
    return createPortal(
      <StyledModal>
        <div className='backdrop'>
          <div className='modal'>{children}</div>
        </div>
      </StyledModal>,
      document.getElementById('modal-root')
    );
  }
};

export default Modal;
