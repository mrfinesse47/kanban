import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  modalMode: null, //will be for whatever form you want in the modal and will be switched in
  //the main app for now
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
