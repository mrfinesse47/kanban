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

function App() {
  const { isLight } = useSelector((state) => state.lightDark);
  const [showSideDrawer, setShowSideDrawer] = useState('initial');
  const [isDropNavOpen, setIsDropNavOpen] = useState(false);

  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      setShowSideDrawer(false);
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
        <OpenDrawer
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
