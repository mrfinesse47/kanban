import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBoards } from './features/boards/boardSlice';

function App() {
  const { boards, isLoading, isSuccess } = useSelector((state) => state.board);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);
  return (
    <div className='App'>
      <p>hello world </p>
      {boards.length &&
        boards.map((board, index) => <div key={index}>{board.name}</div>)}
    </div>
  );
}

export default App;
