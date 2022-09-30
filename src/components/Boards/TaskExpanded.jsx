import React, { useState } from 'react';
import { StyledTaskExpanded } from './styles/TaskExpanded.styled';
import CheckBox from '../ui/CheckBox';
import DropDownNavMenu from '../DropDownNavMenu/DropDownNavMenu';
import DropDown from '../ui/DropDown';
import { useSelector, useDispatch } from 'react-redux';
import { reorderTask, toggleSubTask } from '../../features/boards/boardSlice';

const TaskExpanded = () => {
  //cannot accept in props because it can change positions when changing modal
  //options, so to keep it steady we use a redux state
  const dispatch = useDispatch();
  const { boards, selectedIndex, modalTask } = useSelector(
    (state) => state.board
  );

  //console.log(boards[selectedIndex]);

  const [oldStatus, setOldStatus] = useState(modalTask.status);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const handleSubTaskComplete = (index) => {
    dispatch(toggleSubTask(index));
  };
  const handleStatusChange = (dropDownStatus) => {
    dispatch(reorderTask({ oldStatus, newStatus: dropDownStatus, modalTask }));
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
        <h2>{modalTask.title}</h2>
        <DropDownNavMenu
          isDropNavOpen={isDropOpen}
          setIsDropNavOpen={setIsDropOpen}
          buttonOneText='Edit Task'
          buttonTwoText='Delete Task'
        />
      </header>
      <main>
        <p>{modalTask.description}</p>
        <div className='subtasks'>
          <h4>
            {' '}
            Subtasks (
            {
              modalTask.subtasks.filter(
                (subtask) => subtask.isCompleted === true
              ).length
            }{' '}
            of {modalTask.subtasks.length})
          </h4>
          <ul>
            {modalTask.subtasks.map((subtask, index) => (
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
