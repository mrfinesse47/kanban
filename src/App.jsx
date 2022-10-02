import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
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
import { setIsDropNavOpen } from './features/ui/uiSlice';
import AddTask from './components/forms/AddTask';

function App() {
  const { isLight } = useSelector((state) => state.lightDark);
  const { isModalOpen, modalMode } = useSelector((state) => state.ui);
  const [setShowSideDrawer] = useState('initial');
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      setShowSideDrawer('hide'); //to smoothly close drawer on window resize
    }
  }, [isMobile]);

  return (
    <div
      onClick={(e) => {
        dispatch(setIsDropNavOpen(false));
      }}
    >
      <ThemeProvider theme={getTheme(isLight)}>
        <GlobalStyles />

        <Modal showModal={isModalOpen}>
          {modalMode === 'task-expanded' && <TaskExpanded />}
          {modalMode === 'task-new' && <AddTask />}
          {modalMode === 'edit-task-menu' && <EditTask />}
          {modalMode === 'edit-board-menu' && <EditBoard />}
          {modalMode === 'new-board-menu' && <AddNewBoard />}
        </Modal>

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
