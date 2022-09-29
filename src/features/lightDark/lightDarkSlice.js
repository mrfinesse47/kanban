import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLight: false,
};

export const lightDarkSlice = createSlice({
  name: 'light-dark',
  initialState,
  reducers: {
    toggleIsLight: (state) => {
      state.isLight = !state.isLight;
    },
  },
});

export const { toggleIsLight } = lightDarkSlice.actions;

export default lightDarkSlice.reducer;
