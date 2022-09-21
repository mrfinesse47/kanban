import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../features/boards/boardSlice';
import { motion } from 'framer-motion';
import { StyledBoards } from './styles/Boards.styled';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

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

  function handleOnDragEnd({ destination, source }) {
    // if (!destination) return;
    // setItems((prevItems) => {
    //   const [reorderedItem] = items[source.droppableId].splice(source.index, 1);
    //   items[destination.droppableId].splice(
    //     destination.index,
    //     0,
    //     reorderedItem
    //   );
    //   return prevItems;
    // });
    if (!destination) return;
  }

  return (
    <motion.div
      variants={mainVariants}
      initial='initial'
      animate={showSideDrawer}
      className='main'
    >
      <StyledBoards showSideDrawer={showSideDrawer}>
        <div id='scroll'>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            {selectedIndex !== null &&
              boards[selectedIndex].columns.map((column, index) => (
                <div className='column' key={`column_${index}`}>
                  {/* column header */}
                  <div className='container-column-name'>
                    <div className='status'></div>
                    <h3>
                      {column.name.toUpperCase()} ({column.tasks.length})
                    </h3>
                  </div>
                  {/* end column header */}

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
          </DragDropContext>
          <div className='new-column-option'>
            <button>+ New Column</button>
          </div>
        </div>
      </StyledBoards>
    </motion.div>
  );
};

export default Boards;
