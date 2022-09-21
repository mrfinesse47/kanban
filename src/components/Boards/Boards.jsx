import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../features/boards/boardSlice';
import { motion } from 'framer-motion';
import { StyledBoards } from './styles/Boards.styled';
import Task from './Task';

const mainVariants = {
  hide: {
    x: '-300px',
    width: '100vw',
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
  initial: { x: '-300px', width: '100vw' },
  show: {
    x: 0,
    opacity: 1,
    width: 'calc(100vw - 300px)',
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
      <StyledBoards showSideDrawer={showSideDrawer}>
        <div id='scroll'>
          {selectedIndex !== null &&
            boards[selectedIndex].columns.map((column, index) => (
              <div className='column' key={`column_${index}`}>
                <div className='container-column-name'>
                  <div className='status'></div>
                  <h3>
                    {column.name.toUpperCase()} ({column.tasks.length})
                  </h3>
                </div>

                {column.tasks.map((task, index) => (
                  <Task task={task} key={`task_${index}`} />
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
          <div className='new-column-option'>
            <button>+ New Column</button>
          </div>
        </div>
      </StyledBoards>
    </motion.div>
  );
};

export default Boards;
