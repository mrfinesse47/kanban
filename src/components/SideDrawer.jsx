import React from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import IconBoard from './icons/IconBoard';

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
  const { isLight } = useSelector((state) => state.lightDark);
  const { boards, selectedIndex } = useSelector((state) => state.board);
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
              <h4>ALL BOARDS ({boards.length})</h4>
              <ul className='list-boards'>
                {boards.map((board, index) => (
                  <li
                    key={index}
                    className={`list-boards-item ${
                      index === selectedIndex && 'selected'
                    }`}
                  >
                    <button>{board.name}</button>
                  </li>
                ))}
                <li className='list-boards-item new-board'>
                  <button>+ Create New Board</button>
                </li>
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
