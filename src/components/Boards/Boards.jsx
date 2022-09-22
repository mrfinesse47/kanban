import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../features/boards/boardSlice';
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

  console.log('renders ');

  return (
    <motion.div
      variants={mainVariants}
      initial='initial'
      animate={showSideDrawer}
      className='main'
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StyledBoards>
          <div id='scroll'>
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
                  <Droppable droppableId={column.id}>
                    {/* the ul is droppable */}
                    {(provided) => (
                      <ul
                        style={{ overflow: 'auto' }}
                        className='characters'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {column.tasks.map((task, index) => (
                          <Task
                            task={task}
                            key={`task_${index}`}
                            index={index}
                          />
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
          </div>
        </StyledBoards>
      </DragDropContext>
    </motion.div>
  );
};

export default Boards;
