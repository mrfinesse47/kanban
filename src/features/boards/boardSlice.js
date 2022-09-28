import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import boardService from './boardService';

const initialState = {
  boards: [],
  selectedIndex: null,
  isLoading: false,
  isSuccess: false,
};

//set boards
export const setBoard = createAsyncThunk(
  'boards/board/setAll',
  async (boardData, thunkAPI) => {
    try {
      return await boardService.board.setBoard(boardData);
    } catch (error) {
      const message = 'error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//get all boards
export const getBoards = createAsyncThunk(
  'boards/getAll',
  async (_, thunkAPI) => {
    try {
      return await boardService.getBoards();
    } catch (error) {
      const message = 'error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//add new Board
export const addBoard = createAsyncThunk(
  'boards/board/addBoard',
  async (newBoard, thunkAPI) => {
    try {
      return await boardService.board.addBoard(newBoard);
    } catch (error) {
      const message = 'error';
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectBoardIndex: (state, action) => {
      state.selectedIndex = action.payload;
    },
    reorderTasksOnDragDrop: (state, action) => {
      const { source, destination } = action.payload;

      const [taskToMove] = state.boards[state.selectedIndex].columns[
        source.droppableId
      ].tasks.splice(source.index, 1);

      state.boards[state.selectedIndex].columns[
        destination.droppableId
      ].tasks.splice(destination.index, 0, taskToMove);
    },
    reorderTask: (state, action) => {
      const { oldStatus, newStatus, task } = action.payload;
      if (oldStatus === newStatus) return;
      const columns = state.boards[state.selectedIndex].columns;
      const oldStatusIndex = columns.findIndex(
        (column) => column.name === oldStatus
      );
      const NewStatusIndex = columns.findIndex(
        (column) => column.name === newStatus
      );
      console.log(current(columns[oldStatusIndex].tasks));
      columns[oldStatusIndex].tasks = columns[oldStatusIndex].tasks.filter(
        (colTask) => colTask.id !== task.id
      );
      columns[NewStatusIndex].tasks.push(task);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.boards = action.payload;
        if (state?.boards && state.boards.length > 0) {
          state.selectedIndex = 0;
        }
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(setBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(setBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.boards = action.payload;
        if (state?.boards && state.boards.length > 0) {
          //should move to regular reducers
          state.selectedIndex = 0;
        }
      })
      .addCase(setBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addBoard.pending, (state) => {})
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {});
  },
});

export const { selectBoardIndex, reorderTasksOnDragDrop, reorderTask } =
  boardSlice.actions;
// export of a normal reducer

export default boardSlice.reducer;
