import React from 'react';
import { StyledTask } from './styles/Task.styled';
import { Draggable } from 'react-beautiful-dnd';
import TaskExpanded from './TaskExpanded';
import Modal from '../Modal/Modal';
import { useState } from 'react';

const Task = ({ task, index }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TaskExpanded task={task} />
      </Modal>

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
                  setShowModal(true);
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
