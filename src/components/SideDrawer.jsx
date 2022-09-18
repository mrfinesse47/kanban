import React from 'react';
import { StyledSideDrawer } from './styles/SideDrawer.styled';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const SideDrawer = ({ showSideDrawer, setShowSideDrawer }) => {
  const { boards } = useSelector((state) => state.board);
  console.log(boards);
  return (
    <AnimatePresence>
      {showSideDrawer && (
        <motion.div
          key='sideDrawer'
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
          transition={{ type: 'tweened', bounce: 0, duration: 1 }}
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
                <button onClick={() => setShowSideDrawer(false)}>
                  close modal
                </button>
              </div>
            </div>
          </StyledSideDrawer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;
