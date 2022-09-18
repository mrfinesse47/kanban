import React from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const drawerVariants = {
  hide: {
    x: '-300px',
    opacity: 0,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
  initial: { x: '-300px' },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
};

const SideDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  const { boards } = useSelector((state) => state.board);
  return (
    <AnimatePresence>
      <motion.div
        variants={drawerVariants}
        initial='initial'
        animate={showSideDrawer}
        className='drawer'
      >
        <StyledSideDrawer>
          <div className='container'>
            <div className='menu'>
              <h4>All Boards ({boards.length})</h4>
              <ul className='list-boards'>
                {boards.map((board, index) => (
                  <li key={index} className='list-boards-item'>
                    {board.name}
                  </li>
                ))}
              </ul>
              <button onClick={() => setShowSideDrawer('hide')}>
                close modal
              </button>
            </div>
          </div>
        </StyledSideDrawer>
      </motion.div>
    </AnimatePresence>
  );
};

export default SideDrawer;
