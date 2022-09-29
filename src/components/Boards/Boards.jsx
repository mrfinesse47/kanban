import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBoards,
  reorderTasksOnDragDrop,
} from '../../features/boards/boardSlice';
import { motion } from 'framer-motion';
import { StyledBoards } from './styles/Boards.styled';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Task from './Task';

const mainVariants = {
  hide: {
    marginLeft: 0,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
  initial: { marginLeft: 0 },
  show: {
    marginLeft: 300,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
};

const Boards = () => {
  const { sideDrawerMode } = useSelector((state) => state.ui);
  const { boards, selectedIndex } = useSelector((state) => state.board);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  function handleOnDragEnd(move) {
    if (!move.destination) return;
    dispatch(reorderTasksOnDragDrop(move));
  }

  return (
    <motion.div
      variants={mainVariants}
      animate={sideDrawerMode}
      className='main'
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StyledBoards>
          {selectedIndex !== null &&
            boards[selectedIndex].columns.map((column, index) => (
              <div className='column' key={`column_${index}`}>
                <div className='container-column-name'>
                  <div className='status'></div>
                  <h3>
                    {column.name.toUpperCase()} ({column.tasks.length})
                  </h3>
                </div>
                <Droppable droppableId={index.toString()}>
                  {(provided) => (
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className='drop-zone'
                    >
                      {column.tasks.map((task, index) => (
                        <Task
                          task={task}
                          key={`task_${index}`}
                          index={index}
                          status={column.name}
                        />
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </div>
            ))}

          <div className='new-column-option'>
            <button>+ New Column</button>
          </div>
        </StyledBoards>
      </DragDropContext>
    </motion.div>
  );
};

export default Boards;
