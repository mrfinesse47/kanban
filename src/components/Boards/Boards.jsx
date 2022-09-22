import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards, setBoard } from '../../features/boards/boardSlice';
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

const Boards = ({ showSideDrawer, setShowSideDrawer }) => {
  const { boards, selectedIndex } = useSelector((state) => state.board);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  function handleOnDragEnd(move) {
    if (!move.destination) return;
    // if (!destination) return;
    console.log('move', move);
    console.log(boards);

    // const prevItems = [...boards];
    // should deep copy state or at least the source and destination arrays and then
    // rebuild the obj. so we need the column id for each source and dest array i guess
    // and send that to the slice to handle
    // const originArr = items[move.source.droppableId];
    // const [reorderedItem] = originArr.splice(move.source.index, 1);
    // const destinationArr = items[move.destination.droppableId];
    // destinationArr.splice(move.destination.index, 0, reorderedItem);
    // prevItems[move.source.droppableId] = originArr;
    // prevItems[move.destination.droppableId] = destinationArr;
    // return prevItems;

    dispatch(setBoard({}));
  }

  return (
    <motion.div
      variants={mainVariants}
      // initial='initial'
      animate={showSideDrawer}
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
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                      {column.tasks.map((task, index) => (
                        <Task task={task} key={`task_${index}`} index={index} />
                      ))}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
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
        </StyledBoards>
      </DragDropContext>
    </motion.div>
  );
};

export default Boards;
