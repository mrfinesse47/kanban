import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import boardService from './boardService';

const initialState = {
  boards: [],
  modalTask: null, //need a copy of a task for modal
  selectedIndex: null,
  isLoading: false,
  isSuccess: false,
};

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
    setModalTask: (state, action) => {
      state.modalTask = action.payload.task;
    },
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

      //the task keeps track of its own status as well
      state.boards[state.selectedIndex].columns[destination.droppableId].tasks[
        destination.index
      ].status =
        state.boards[state.selectedIndex].columns[destination.droppableId].name;
    },
    reorderTask: (state, action) => {
      const { oldStatus, newStatus } = action.payload;
      if (oldStatus === newStatus) return;
      const columns = state.boards[state.selectedIndex].columns;
      const oldStatusIndex = columns.findIndex(
        (column) => column.name === oldStatus
      );
      const NewStatusIndex = columns.findIndex(
        (column) => column.name === newStatus
      );

      columns[oldStatusIndex].tasks = columns[oldStatusIndex].tasks.filter(
        (colTask) => colTask.id !== state.modalTask.id
      );
      columns[NewStatusIndex].tasks.push(state.modalTask);
      //pushes to the boards array
      state.modalTask.status = newStatus;
      //updates modal state, the reason to have them seperate is if the modal
      //depends on changing state, the modal will change when it is open which we dont want
      //pretty sure if this was just a regular form with submit button all fo this
      //wouldnt be necessary
    },
    toggleSubTask: (state, action) => {
      const task = state.modalTask;
      const columns = state.boards[state.selectedIndex].columns;
      const isCompleted = state.modalTask.subtasks[action.payload].isCompleted;
      //we need to find the indexes because it can change while the
      //modal is open, so it can't count on information that is passed in
      //when the modal opens,
      //also the reason why everything is in arrays is so the drag and drop
      //functionality works.

      const colIndex = columns.findIndex(
        (column) => column.name === task.status
      );

      const taskIndex = state.boards[state.selectedIndex].columns[
        colIndex
      ].tasks.findIndex((t) => t.id === task.id);

      //update global state
      state.boards[state.selectedIndex].columns[colIndex].tasks[
        taskIndex
      ].subtasks[action.payload].isCompleted = !isCompleted;
      //update modal state
      state.modalTask.subtasks[action.payload].isCompleted = !isCompleted;
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
      .addCase(addBoard.pending, (state) => {})
      .addCase(addBoard.fulfilled, (state, action) => {
        state.boards.push(action.payload);
      })
      .addCase(addBoard.rejected, (state, action) => {});
  },
});

export const {
  selectBoardIndex,
  reorderTasksOnDragDrop,
  reorderTask,
  setModalTask,
  toggleSubTask,
} = boardSlice.actions;
// export of a normal reducer

export default boardSlice.reducer;
