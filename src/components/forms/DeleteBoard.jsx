import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { StyledDeleteMenu } from './styles/DeleteMenu.styled';
import { closeModal } from '../../features/ui/uiSlice';

const DeleteBoard = () => {
  const dispatch = useDispatch();
  const { boards, selectedIndex } = useSelector((state) => state.board);
  return (
    <StyledDeleteMenu>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Delete This Board</h3>
        <p>
          Are you sure you want to delete the '{boards[selectedIndex].name}'
          This action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className='buttons-container'>
          <button className='delete'>Delete</button>
          <button
            className='cancel'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </StyledDeleteMenu>
  );
};

export default DeleteBoard;
