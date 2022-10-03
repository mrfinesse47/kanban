import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import boardService from './boardService';
import { v4 as uuid } from 'uuid';

const initialState = {
  boards: [],
  modalTask: null, //need a copy of a task for modal
  selectedIndex: null,
  isLoading: false,
  isSuccess: false,
  columnNames: {},
};

//-------------------------------------------------------------------
// Helper functions
//-------------------------------------------------------------------

const updateColNamesIndex = (state, index) => {
  const colNames = {};
  state.boards[index].columns.forEach((col, index) => {
    colNames[col.name] = index;
  });
  return colNames;
};

//-------------------------------------------------------------------

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
      if (!action.payload) {
        state.modalTask = {
          description: '',
          id: uuid(),
          status: state.boards[state.selectedIndex].columns[0].name,
          subtasks: [],
          title: '',
        };
      } else {
        state.modalTask = action.payload.task;
      }
    },
    selectBoardIndex: (state, action) => {
      const index = action.payload;

      state.columnNames = updateColNamesIndex(state, index);
      state.selectedIndex = index;
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

      const oldStatusIndex = state.columnNames[oldStatus];

      const newStatusIndex = state.columnNames[newStatus];

      columns[oldStatusIndex].tasks = columns[oldStatusIndex].tasks.filter(
        (colTask) => colTask.id !== state.modalTask.id
      );
      columns[newStatusIndex].tasks.push(state.modalTask);
      //pushes to the boards array
      state.modalTask.status = newStatus;
      //updates modal state, the reason to have them seperate is if the modal
      //depends on changing state, the modal will change when it is open which we dont want
      //pretty sure if this was just a regular form with submit button all of this
      //wouldnt be necessary
    },
    toggleSubTask: (state, action) => {
      const task = state.modalTask;

      const isCompleted = state.modalTask.subtasks[action.payload].isCompleted;

      const colIndex = state.columnNames[task.status];

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
    addTask: (state, action) => {
      const task = action.payload;
      console.log(task);
    },
    updateTask: (state, action) => {
      const task = action.payload;
      const columns = state.boards[state.selectedIndex].columns;

      const colIndex = state.columnNames[state.modalTask.status];

      const taskIndex = state.boards[state.selectedIndex].columns[
        colIndex
      ].tasks.findIndex((t) => t.id === task.id);

      //if it remains in the same column that is...

      columns[colIndex].tasks[taskIndex] = task;

      //if not got to move it
      if (task.status !== state.modalTask.status) {
        const newIndex = state.columnNames[task.status];

        // remove it from old array
        columns[colIndex].tasks = columns[colIndex].tasks.filter(
          (colTask) => colTask.id !== state.modalTask.id
        );

        //update modaltask just incase even though form closes
        state.modalTask.status = task.status;

        columns[newIndex].tasks.push(task);
      }
    },
    editBoard: (state, action) => {
      // console.log(current(state.boards[state.selectedIndex].columns));
      // console.log(action.payload);
      state.boards[state.selectedIndex].columns = action.payload.columns;
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
          state.columnNames = updateColNamesIndex(state, 0);
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
  updateTask,
  addTask,
  editBoard,
} = boardSlice.actions;

export default boardSlice.reducer;
