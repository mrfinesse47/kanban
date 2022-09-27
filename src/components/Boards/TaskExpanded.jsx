import React from 'react';
import { StyledTaskExpanded } from './styles/TaskExpanded.styled';

const TaskExpanded = ({ task }) => {
  console.log(task);
  return (
    <StyledTaskExpanded>
      <header>
        <h2>{task.title}</h2>
      </header>
      <main>
        <p>{task.description}</p>
        <div className='subtasks'>
          <h4>
            {' '}
            Subtasks (
            {
              task.subtasks.filter((subtask) => subtask.isCompleted === true)
                .length
            }{' '}
            of {task.subtasks.length})
          </h4>
          <ul>
            {task.subtasks.map((subtask) => (
              <li>
                <input type='checkbox' />
                {subtask.title}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer></footer>
    </StyledTaskExpanded>
  );
};

export default TaskExpanded;
