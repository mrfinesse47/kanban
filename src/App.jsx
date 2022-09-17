import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoards } from './features/boards/boardSlice';
import { ThemeProvider } from 'styled-components';
import getTheme from './theme/getTheme';
import GlobalStyles from './components/styles/Global';

import Navbar from './components/Navbar';

function App() {
  const { boards, isLoading, isSuccess } = useSelector((state) => state.board);
  const [isLight, setIsLight] = useState(false); //will use local storage for this eventually
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  return (
    <ThemeProvider theme={getTheme(isLight)}>
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
