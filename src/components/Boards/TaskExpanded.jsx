import React, { useState } from 'react';
import { StyledTaskExpanded } from './styles/TaskExpanded.styled';
import CheckBox from '../ui/CheckBox';
import DropDownNavMenu from '../DropDownNavMenu/DropDownNavMenu';
import DropDown from '../ui/DropDown';
import { useSelector, useDispatch } from 'react-redux';
import { reorderTask } from '../../features/boards/boardSlice';
import { useEffect } from 'react';

const TaskExpanded = ({ task, status, setShowModal }) => {
  const dispatch = useDispatch();

  const { boards, selectedIndex } = useSelector((state) => state.board);
  const [newStatus, setNewStatus] = useState(status);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isSelectlOpen, setIsSelectOpen] = useState(false);
  const handleTaskComplete = (index) => {
    console.log('handle task complete index', index);
  };
  const handleStatusChange = (dropDownStatus) => {
    // dispatch(reorderTask({ oldStatus: status, newStatus, task }));
    setNewStatus(dropDownStatus);
  };
  const allPossibleStatus = boards[selectedIndex].columns.map(
    (column) => column.name
  );

  useEffect(() => {
    return () => {
      if (newStatus) {
        dispatch(reorderTask({ oldStatus: status, newStatus, task }));
      }
    };
  }, [dispatch, newStatus, task, status]);

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
                    handleTaskComplete(index);
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
          currentSelection={newStatus}
          handleSelectionChange={handleStatusChange}
          isOpen={isSelectlOpen}
          setIsOpen={setIsSelectOpen}
        />
      </footer>
    </StyledTaskExpanded>
  );
};

export default TaskExpanded;
