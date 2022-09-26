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
        <div className='subtasks'></div>
      </main>
      <footer></footer>
    </StyledTaskExpanded>
  );
};

export default TaskExpanded;
