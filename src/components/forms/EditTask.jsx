import React, { useState } from 'react';
import TaskForm from './TaskForm';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { updateTask } from '../../features/boards/boardSlice';

const EditTask = () => {
  const dispatch = useDispatch();
  const { modalTask } = useSelector((state) => state.board);
  const [subTasks, setSubtasks] = useState(
    //the form data
    modalTask.subtasks.map((subtask) => ({
      value: subtask.title,
      error: { status: false, message: '' },
      id: uuid(),
      isCompleted: subtask.isCompleted,
    }))
  );
  const dispatchHandler = (title, description, modalTask, subTasks, status) => {
    dispatch(
      updateTask({
        title: title.value,
        description,
        id: modalTask.id,
        subtasks: subTasks.map((subtask) => ({
          title: subtask.value,
          isCompleted: subtask.isCompleted,
        })),
        status,
      })
    );
  };
  return (
    <TaskForm
      subTasks={subTasks}
      setSubtasks={setSubtasks}
      dispatchHandler={dispatchHandler}
      formTitle={'Edit Task'}
      modalTask={modalTask}
    ></TaskForm>
  );
};

export default EditTask;
