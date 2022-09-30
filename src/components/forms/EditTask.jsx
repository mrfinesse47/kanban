import React from 'react';
import { StyledForm } from './styles/Form.styled';
import { motion } from 'framer-motion';

const EditTask = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <StyledForm>EditTask</StyledForm>
    </motion.div>
  );
};

export default EditTask;
