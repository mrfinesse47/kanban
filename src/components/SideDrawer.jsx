import React from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';

const backdrop = { visible: { opacity: 1 }, hidden: { opacity: 0 } };

const SideDrawer = ({ showSideDrawer, setShowSideDrawer, children }) => {
  return (
    <AnimatePresence>
      {showSideDrawer && (
        <StyledSideDrawer>
          <motion.div
            layout
            onClick={(e) => e.stopPropagation()}
            className='sideDrawer'
            initial={{ x: '-100vw' }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '-100vw',
            }}
            transition={{ type: 'spring', bounce: 0, duration: 1.2 }}
          >
            <div className='container'>
              <div className='menu'>
                <button onClick={() => setShowSideDrawer(false)}>
                  close modal
                </button>
              </div>
              {children}
            </div>
          </motion.div>
        </StyledSideDrawer>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
