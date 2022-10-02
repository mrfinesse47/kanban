import React from 'react';
import TaskForm from './TaskForm';
import { updateTask } from '../../features/boards/boardSlice';

const EditTask = () => {
  return (
    <TaskForm
      formTitle={'Edit Task'}
      reduxTaskFormSubmitAction={updateTask}
    ></TaskForm>
  );
};

export default EditTask;
