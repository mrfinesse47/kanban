import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../features/boards/boardSlice';
import { motion } from 'framer-motion';
import { StyledBoards } from './styles/Boards.styled';

const mainVariants = {
  hide: {
    x: '-300px',
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
  initial: { x: '-300px' },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
};

const Boards = ({ showSideDrawer, setShowSideDrawer }) => {
  const { boards, selectedIndex } = useSelector((state) => state.board);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);
  return (
    <motion.div
      variants={mainVariants}
      initial='initial'
      animate={showSideDrawer}
      className='main'
    >
      <StyledBoards>
        <div id='scroll'>
          {selectedIndex !== null &&
            boards[selectedIndex].columns.map((row, index) => (
              <div className='column' key={`row_${index}`}>
                {row.name}
                {row.tasks.map((task, index) => (
                  <li key={`task_${index}`}>{task.title}</li>
                ))}
                <button
                  onClick={() => {
                    setShowSideDrawer('show');
                  }}
                >
                  show drawer
                </button>
              </div>
            ))}
        </div>
      </StyledBoards>
    </motion.div>
  );
};

export default Boards;
