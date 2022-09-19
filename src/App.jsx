import { useEffect, useState } from 'react';
import Boards from './components/Boards';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';
import SideDrawer from './components/SideDrawer';
import { LayoutGroup } from 'framer-motion';

import Navbar from './components/Navbar';

function App() {
  const [isLight, setIsLight] = useState(false); //will use local storage for this eventually
  const [showSideDrawer, setShowSideDrawer] = useState('initial');

  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    if (isMobile) {
      setShowSideDrawer(false);
    }
  }, [isMobile]);

  return (
    <ThemeProvider theme={getTheme(isLight)}>
      <GlobalStyles />
      <Navbar isLight={isLight} />
      <div className='App'>
        <LayoutGroup>
          <SideDrawer
            showSideDrawer={showSideDrawer}
            setShowSideDrawer={setShowSideDrawer}
          ></SideDrawer>
          <Boards
            showSideDrawer={showSideDrawer}
            setShowSideDrawer={setShowSideDrawer}
          />
        </LayoutGroup>
      </div>
    </ThemeProvider>
  );
}

export default App;
