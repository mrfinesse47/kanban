import React, { useState } from 'react';
import { StyledTaskExpanded } from './styles/TaskExpanded.styled';
import CheckBox from '../ui/CheckBox';
import DropDownNavMenu from '../DropDownNavMenu/DropDownNavMenu';

const TaskExpanded = ({ task }) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const handleTaskComplete = (index) => {
    console.log('handle task complete index', index);
  };
  console.log(task);
  return (
    <StyledTaskExpanded>
      <header>
        <h2>{task.title}</h2>
        <DropDownNavMenu
          isDropNavOpen={isDropOpen}
          setIsDropNavOpen={setIsDropOpen}
          buttonOneText='Edit Task'
          buttonTwoText='Delete Task'
        />
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
            {task.subtasks.map((subtask, index) => (
              <li key={`subtask-${index}`} className={'subtask'}>
                <CheckBox
                  isChecked={subtask.isCompleted}
                  clickHandler={() => {
                    handleTaskComplete(index);
                  }}
                ></CheckBox>
                <span className='subtask-title'>{subtask.title}</span>
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
