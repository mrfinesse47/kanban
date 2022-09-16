import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/boards/boardSlice';

export const store = configureStore({
  reducer: { board: boardReducer },
});
