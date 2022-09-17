import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoards } from './features/boards/boardSlice';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  const { boards, isLoading, isSuccess } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className='App'>
        <p>hello world </p>
        {boards.length &&
          boards.map((board, index) => <div key={index}>{board.name}</div>)}
      </div>
    </ThemeProvider>
  );
}

export default App;
