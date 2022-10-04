import React from 'react';
import { StyledDeleteMenu } from './styles/DeleteMenu.styled';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../features/ui/uiSlice';
import { deleteTask } from '../../features/boards/boardSlice';

const DeleteTask = () => {
  const dispatch = useDispatch();
  const { modalTask } = useSelector((state) => state.board);
  return (
    <StyledDeleteMenu>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Delete This Task?</h3>
        <p>
          Are you sure you want to delete the ‘{modalTask.title}’ task and its
          subtasks? This action cannot be reversed.
        </p>
        <div className='buttons-container'>
          <button
            className='delete'
            onClick={() => {
              dispatch(closeModal());
              dispatch(deleteTask());
            }}
          >
            Delete
          </button>
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

export default DeleteTask;
