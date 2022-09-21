import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../features/boards/boardSlice';
import { motion } from 'framer-motion';
import { StyledBoards } from './styles/Boards.styled';

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
            boards[selectedIndex].columns.map((row, index) => (
              <div className='column' key={`row_${index}`}>
                <div className='container-row-name'>
                  <div className='status'></div>
                  <h3>{row.name.toUpperCase()}</h3>
                </div>

                {row.tasks.map((task, index) => {
                  return (
                    <li key={`task_${index}`} className='task'>
                      <h4>{task.title}</h4>
                      <div className='completion'>
                        {
                          task.subtasks.filter(
                            (subtask) => subtask.isCompleted === true
                          ).length
                        }{' '}
                        of {task.subtasks.length} Subtasks
                      </div>
                    </li>
                  );
                })}
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
