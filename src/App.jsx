import { useEffect, useState } from 'react';
import Boards from './components/Boards/Boards';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';
import SideDrawer from './components/SideDrawer';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import OpenDrawer from './components/OpenDrawer';
import Modal from './components/Modal/Modal';

function App() {
  const { isLight } = useSelector((state) => state.lightDark);
  const [showSideDrawer, setShowSideDrawer] = useState('initial');

  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      setShowSideDrawer(false);
    }
  }, [isMobile]);

  return (
    <>
      <ThemeProvider theme={getTheme(isLight)}>
        <GlobalStyles />
        <OpenDrawer
          showSideDrawer={showSideDrawer}
          setShowSideDrawer={setShowSideDrawer}
        />

        <Navbar isLight={isLight} />
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
    </>
  );
}

export default App;
