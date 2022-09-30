import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  isDropNavOpen: false,
  modalMode: null,
  sideDrawerMode: 'initial',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalMode = action.payload;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalMode = null;
    },
    setSideDrawerMode: (state, action) => {
      state.sideDrawerMode = action.payload;
    },
    setIsDropNavOpen: (state, action) => {
      state.isDropNavOpen = action.payload;
    },
  },
});

export const { openModal, closeModal, setSideDrawerMode, setIsDropNavOpen } =
  uiSlice.actions;

export default uiSlice.reducer;
