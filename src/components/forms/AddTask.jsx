import React from 'react';
import TaskForm from './TaskForm';
import { addTask } from '../../features/boards/boardSlice';

const AddTask = () => {
  return (
    <TaskForm
      formTitle={'Add Task'}
      reduxTaskFormSubmitAction={addTask}
    ></TaskForm>
  );
};

export default AddTask;
