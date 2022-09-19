import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import boardService from './boardService';

const initialState = {
  boards: [],
  selectedIndex: null,
  isLoading: false,
  isSuccess: false,
};

//get all boards
export const getBoards = createAsyncThunk(
  'board/getAll',
  async (_, thunkAPI) => {
    try {
      return await boardService.getBoards();
    } catch (error) {
      const message = 'error';

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.boards = action.payload;
        if (state.boards.length > 0) {
          state.selectedIndex = 0;
        }
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// export const { reset } = boardSlice.actions;
// export of a normal reducer

export default boardSlice.reducer;
