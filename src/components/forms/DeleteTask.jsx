import React from 'react';
import { StyledTaskMenu } from './styles/TaskMenu.styled';
import { motion } from 'framer-motion';

const DeleteTask = () => {
  return (
    <StyledTaskMenu>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        DeleteModal
      </motion.div>
    </StyledTaskMenu>
  );
};

export default DeleteTask;
