import React from 'react';
import { StyledTask } from './styles/Task.styled';
import { Draggable } from 'react-beautiful-dnd';
import TaskExpanded from './TaskExpanded';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../features/ui/uiSlice';
import { setSelectedExpandedTask } from '../../features/boards/boardSlice';

const Task = ({ task, index, status }) => {
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/* <Modal showModal={showModal} setShowModal={setShowModal}>
        <TaskExpanded task={task} setShowModal={setShowModal} status={status} />
      </Modal> */}

      <StyledTask>
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(provided) => (
            <li
              id={task.id}
              className='task'
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <h4>{task.title}</h4>
              <button
                className='open-expanded'
                onClick={() => {
                  dispatch(setSelectedExpandedTask({ task, status }));
                  dispatch(openModal('task-expanded'));
                }}
              >
                <div className='completion'>
                  {
                    task.subtasks.filter(
                      (subtask) => subtask.isCompleted === true
                    ).length
                  }
                  of {task.subtasks.length} Subtasks
                </div>
              </button>
            </li>
          )}
        </Draggable>
      </StyledTask>
    </>
  );
};

export default Task;
