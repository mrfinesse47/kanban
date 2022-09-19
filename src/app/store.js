import { configureStore } from '@reduxjs/toolkit';
import boardReducer from '../features/boards/boardSlice';
import lightDarkReducer from '../features/lightDark/lightDarkSlice';

export const store = configureStore({
  reducer: { board: boardReducer, lightDark: lightDarkReducer },
});
