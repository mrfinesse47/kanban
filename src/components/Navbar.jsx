import React from 'react';
import { StyledNav } from './styles/Navbar.styled';
import { useSelector, useDispatch } from 'react-redux';
import DropDownNavMenu from './DropDownNavMenu/DropDownNavMenu';
import { setIsDropNavOpen } from '../features/ui/uiSlice';
import { openModal } from '../features/ui/uiSlice';
import { setModalTask } from '../features/boards/boardSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDropNavOpen } = useSelector((state) => state.ui);
  const { boards, selectedIndex } = useSelector((state) => state.board);
  const { isLight } = useSelector((state) => state.lightDark);
  let isOneColExist = false;

  if (boards[selectedIndex]) {
    isOneColExist = !!boards[selectedIndex].columns.length;
  }

  return (
    <StyledNav>
      <div className='logo-container'>
        <img
          src={`./assets/logo-${isLight ? 'dark' : 'light'}.svg`}
          alt='kanban'
        />
      </div>
      <div className='container'>
        {boards.length ? (
          <h1>{boards[selectedIndex].name}</h1>
        ) : (
          <h1>No Active Boards</h1>
        )}
        <div className='actions-container'>
          <button
            className={`button-add-new-task ${!isOneColExist && 'disabled'}`}
            onClick={() => {
              if (isOneColExist) {
                dispatch(setModalTask());
                dispatch(openModal('task-new'));
              }
            }}
          >
            <span className='plus'>+</span> Add New Task
          </button>
          <DropDownNavMenu
            isDropNavOpen={isDropNavOpen}
            setIsDropNavOpen={(isOpen) => {
              dispatch(setIsDropNavOpen(isOpen));
            }}
            buttonOneText='Edit Board'
            buttonTwoText='Delete Board'
            editAction={() => {
              dispatch(setIsDropNavOpen(false));
              dispatch(openModal('edit-board-menu'));
            }}
            deleteAction={() => {
              dispatch(setIsDropNavOpen(false));
              dispatch(openModal('delete-board'));
            }}
          />
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
