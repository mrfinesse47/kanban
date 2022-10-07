import React from 'react';
import { StyledTask } from './styles/Task.styled';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/ui/uiSlice';
import { setModalTask } from '../../features/boards/boardSlice';

const Task = ({ task, index }) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledTask>
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <li
              onClick={() => {
                dispatch(
                  setModalTask({
                    task,
                  })
                );
                dispatch(openModal('task-expanded'));
              }}
              id={task.id}
              className='task'
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h4>{task.title}</h4>

              <div className='completion'>
                {
                  task.subtasks.filter(
                    (subtask) => subtask.isCompleted === true
                  ).length
                }
                of {task.subtasks.length} Subtasks
              </div>
            </li>
          )}
        </Draggable>
      </StyledTask>
    </>
  );
};

export default Task;
