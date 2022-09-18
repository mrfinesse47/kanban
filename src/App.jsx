import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoards } from './features/boards/boardSlice';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from '@react-hook/media-query';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';
import SideDrawer from './components/SideDrawer';
import { motion, LayoutGroup } from 'framer-motion';

import Navbar from './components/Navbar';

const mainVariants = {
  hide: {
    x: '-300px',
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
  initial: { x: '-300px' },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: 'easeInOut', type: 'linear' },
  },
};

function App() {
  const { boards, isLoading, isSuccess } = useSelector((state) => state.board);
  const [isLight, setIsLight] = useState(false); //will use local storage for this eventually
  const [showSideDrawer, setShowSideDrawer] = useState('initial');
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('only screen and (max-width: 768px)');

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

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

          <motion.div
            variants={mainVariants}
            initial='initial'
            animate={showSideDrawer}
            className='main'
          >
            {boards.length &&
              boards.map((board, index) => <div key={index}>{board.name}</div>)}
            <button
              onClick={() => {
                setShowSideDrawer('show');
              }}
            >
              show drawer
            </button>
          </motion.div>
        </LayoutGroup>
      </div>
    </ThemeProvider>
  );
}

export default App;
