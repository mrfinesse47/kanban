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
import { setIsDropNavOpen } from './features/ui/uiSlice';

function App() {
  const { isLight } = useSelector((state) => state.lightDark);
  const { isModalOpen, modalMode } = useSelector((state) => state.ui);
  const [setShowSideDrawer] = useState('initial');
  const dispatch = useDispatch();
  // const [isDropNavOpen, setIsDropNavOpen] = useState(false);
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
          {modalMode === 'new-board-menu' && <AddNewBoard />}
        </Modal>

        <OpenDrawerButton />

        <Navbar
          isLight={isLight}
          // isDropNavOpen={isDropNavOpen}
          // setIsDropNavOpen={setIsDropNavOpen}
        />
        <div className='App'>
          <SideDrawer />
          <Boards />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
