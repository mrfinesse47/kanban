import React from 'react';
import { StyledOpenDrawer } from './styles/OpenDrawer.styled';
import { motion, AnimatePresence } from 'framer-motion';

const OpenDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  return (
    <AnimatePresence>
      {(showSideDrawer === 'hide' || showSideDrawer === 'initial') && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <StyledOpenDrawer
            onClick={() => {
              setShowSideDrawer('show');
            }}
          >
            <img src='./assets/icon-show-sidebar.svg' alt='open menu' />
          </StyledOpenDrawer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpenDrawer;
