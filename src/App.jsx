import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

import Boards from './components/Boards/Boards';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';
import SideDrawer from './components/SideDrawer';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar';
import OpenDrawerButton from './components/OpenDrawerButton';
import TaskExpanded from './components/Boards/TaskExpanded';
import AddNewBoard from './components/forms/AddNewBoard';
import EditTask from './components/forms/EditTask';
import EditBoard from './components/forms/EditBoard';
import DeleteTask from './components/forms/DeleteTask';
import DeleteBoard from './components/forms/DeleteBoard';
import { setIsDropNavOpen } from './features/ui/uiSlice';
import AddTask from './components/forms/AddTask';

const determineModalEl = (modalMode) => {
  let modalEl = null;
  switch (modalMode) {
    case 'task-expanded':
      modalEl = <TaskExpanded />;
      break;
    case 'task-new':
      modalEl = <AddTask />;
      break;
    case 'edit-task-menu':
      modalEl = <EditTask />;
      break;
    case 'edit-board-menu':
      modalEl = <EditBoard />;
      break;
    case 'new-board-menu':
      modalEl = <AddNewBoard />;
      break;
    case 'delete-menu':
      modalEl = <DeleteTask />;
      break;
    case 'delete-board':
      modalEl = <DeleteBoard />;
      break;
    default:
      modalEl = <></>;
  }
  return modalEl;
};

function App() {
  const { isLight } = useSelector((state) => state.lightDark);
  const { isModalOpen, modalMode } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  return (
    <div
      onClick={(e) => {
        dispatch(setIsDropNavOpen(false));
      }}
    >
      <ThemeProvider theme={getTheme(isLight)}>
        <GlobalStyles />
        <Modal showModal={isModalOpen}>{determineModalEl(modalMode)}</Modal>
        <OpenDrawerButton />
        <Navbar isLight={isLight} />
        <div className='App'>
          <SideDrawer />
          <Boards />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
