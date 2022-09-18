import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoards } from './features/boards/boardSlice';
import { ThemeProvider } from 'styled-components';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';
import SideDrawer from './components/SideDrawer';
import { motion, LayoutGroup } from 'framer-motion';

import Navbar from './components/Navbar';

function App() {
  const { boards, isLoading, isSuccess } = useSelector((state) => state.board);
  const [isLight, setIsLight] = useState(false); //will use local storage for this eventually
  const [showSideDrawer, setShowSideDrawer] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

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

          <motion.div layout transition={{ duration: 0.5 }} className='test'>
            {boards.length &&
              boards.map((board, index) => <div key={index}>{board.name}</div>)}
            <button
              onClick={() => {
                setShowSideDrawer(true);
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
