import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalMode: null,
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
  },
});

export const { openModal, closeModal } = uiSlice.actions;

export default uiSlice.reducer;
