import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLight: false,
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    toggleIsLight: (state) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { toggleIsLight } = boardSlice.actions;

export default boardSlice.reducer;
