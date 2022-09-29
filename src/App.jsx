import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import { useSelector } from 'react-redux';

import Boards from './components/Boards/Boards';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';
import SideDrawer from './components/SideDrawer';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar';
import OpenDrawerButton from './components/OpenDrawerButton';
import TaskExpanded from './components/Boards/TaskExpanded';
import AddNewBoard from './components/forms/AddNewBoard';

function App() {
  const { isLight } = useSelector((state) => state.lightDark);
  const { isModalOpen, modalMode } = useSelector((state) => state.ui);
  const [showSideDrawer, setShowSideDrawer] = useState('initial');
  const [isDropNavOpen, setIsDropNavOpen] = useState(false);
  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      setShowSideDrawer('hide'); //to smoothly close drawer on window resize
    }
  }, [isMobile]);

  return (
    <div
      onClick={(e) => {
        setIsDropNavOpen(false);
      }}
    >
      <ThemeProvider theme={getTheme(isLight)}>
        <GlobalStyles />
        <Modal showModal={isModalOpen}>
          {modalMode === 'task-expanded' && <TaskExpanded />}
          {modalMode === 'new-board-menu' && <AddNewBoard />}
        </Modal>

        <OpenDrawerButton
          showSideDrawer={showSideDrawer}
          setShowSideDrawer={setShowSideDrawer}
        />

        <Navbar
          isLight={isLight}
          isDropNavOpen={isDropNavOpen}
          setIsDropNavOpen={setIsDropNavOpen}
        />
        <div className='App'>
          <SideDrawer
            showSideDrawer={showSideDrawer}
            setShowSideDrawer={setShowSideDrawer}
          ></SideDrawer>

          <Boards
            showSideDrawer={showSideDrawer}
            setShowSideDrawer={setShowSideDrawer}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
