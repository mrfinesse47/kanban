import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoards } from './features/boards/boardSlice';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';

import Navbar from './components/Navbar';

const light = {
  backgroundMain: '#F4F7FD',
  backgroundSecondary: '#fff',
  textMain: '#000112',
  textAccent: '#828FA3',
};

const dark = {
  backgroundMain: '#20212C',
  backgroundSecondary: '#2B2C37',
  textMain: '#FFFFFF',
  textAccent: '#828FA3',
};

const media = {
  mobile: '768px',
};

function App() {
  const { boards, isLoading, isSuccess } = useSelector((state) => state.board);
  const [isLight, setIsLight] = useState(false); //will use local storage for this eventually
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);
  return (
    <ThemeProvider
      theme={isLight ? { ...light, ...media } : { ...dark, ...media }}
    >
      <GlobalStyles />
      <Navbar />
      <div className='App'>
        <p>hello world </p>
        {boards.length &&
          boards.map((board, index) => <div key={index}>{board.name}</div>)}
      </div>
    </ThemeProvider>
  );
}

export default App;
