import React from 'react';
import { StyledOpenDrawer } from './styles/OpenDrawer.styled';
import { motion, AnimatePresence } from 'framer-motion';
import { setSideDrawerMode } from '../features/ui/uiSlice';
import { useSelector, useDispatch } from 'react-redux';

const OpenDrawerButton = () => {
  const { sideDrawerMode } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      {(sideDrawerMode === 'hide' || sideDrawerMode === 'initial') && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StyledOpenDrawer
            onClick={() => {
              dispatch(setSideDrawerMode('show'));
            }}
          >
            <img src='./assets/icon-show-sidebar.svg' alt='open menu' />
          </StyledOpenDrawer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpenDrawerButton;
