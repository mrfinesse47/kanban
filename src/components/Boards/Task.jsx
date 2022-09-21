import React from 'react';
import { StyledTask } from './styles/Task.styled';

const Task = ({ task }) => {
  return (
    <StyledTask>
      <li className='task'>
        <h4>{task.title}</h4>
        <div className='completion'>
          {
            task.subtasks.filter((subtask) => subtask.isCompleted === true)
              .length
          }{' '}
          of {task.subtasks.length} Subtasks
        </div>
      </li>
    </StyledTask>
  );
};

export default Task;
