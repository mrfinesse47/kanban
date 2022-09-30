import React, { useState } from 'react';
import { StyledTaskExpanded } from './styles/TaskExpanded.styled';
import CheckBox from '../ui/CheckBox';
import DropDownNavMenu from '../DropDownNavMenu/DropDownNavMenu';
import DropDown from '../ui/DropDown';
import { useSelector, useDispatch } from 'react-redux';
import { reorderTask, toggleSubTask } from '../../features/boards/boardSlice';

const TaskExpanded = () => {
  const dispatch = useDispatch();
  const { boards, selectedIndex, selectedExpandedTask } = useSelector(
    (state) => state.board
  );
  const { task, status } = selectedExpandedTask;
  //console.log(boards[selectedIndex]);

  const [oldStatus, setOldStatus] = useState(status);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSubTaskComplete = (index) => {
    dispatch(toggleSubTask(index));
  };
  const handleStatusChange = (dropDownStatus) => {
    dispatch(reorderTask({ oldStatus, newStatus: dropDownStatus, task }));
    setOldStatus(dropDownStatus);
    setIsSelectOpen(false);
  };
  const allPossibleStatus = boards[selectedIndex].columns.map(
    (column) => column.name
  );

  return (
    <StyledTaskExpanded
      onClick={() => {
        setIsDropOpen(false);
        setIsSelectOpen(false);
      }}
    >
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
                    handleSubTaskComplete(index);
                  }}
                ></CheckBox>
                <span className='subtask-title'>{subtask.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer>
        <h4>Current Status</h4>
        <DropDown
          dropdownItems={allPossibleStatus}
          currentSelection={oldStatus}
          handleSelectionChange={handleStatusChange}
          isOpen={isSelectOpen}
          setIsOpen={setIsSelectOpen}
        />
      </footer>
    </StyledTaskExpanded>
  );
};

export default TaskExpanded;
