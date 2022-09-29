import React from 'react';
import { createPortal } from 'react-dom';
import { StyledModal } from './styles/Modal.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/ui/uiSlice';

const Modal = ({ children, showModal }) => {
  const dispatch = useDispatch();
  return createPortal(
    <AnimatePresence>
      {showModal && (
        <StyledModal>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='backdrop'
            onClick={(e) => {
              dispatch(closeModal());
            }}
          >
            <div className='modal' onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
          </motion.div>
        </StyledModal>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root')
  );
};

export default Modal;
