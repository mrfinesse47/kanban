import React from 'react';
import { StyledForm } from './styles/Form.styled';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import DynamicList from './DynamicList';

const EditTask = () => {
  const { boards, selectedIndex, modalTask } = useSelector(
    (state) => state.board
  );

  const subTasks = modalTask.subtasks.map((subtask) => ({
    name: subtask.title,
    error: { status: false, message: '' },
    id: uuid(),
  }));
  console.log(subTasks);
  const handleSubTaskChange = () => {
    console.log('handle item change');
  };
  const handleSubTaskDelete = () => {
    console.log('handle item delete');
  };
  const setErrorMessageOnSubTaskFalse = () => {
    console.log('setErrorMessageOnItemFalse');
  };
  const handleAddSubTask = () => {
    console.log('handleAdditem');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <StyledForm>
        <h3>Edit Task</h3>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' placeholder='e.g. Take coffee break' />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            id='description'
            placeholder='e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.'
          />
        </div>
        {/* need to turn input list into component see in add new board */}
        <DynamicList
          title={'Subtasks'}
          items={subTasks}
          handleItemChange={handleSubTaskChange}
          handleItemDelete={handleSubTaskDelete}
          setErrorMessageOnItemFalse={setErrorMessageOnSubTaskFalse}
          handleAdditem={handleAddSubTask}
        />
      </StyledForm>
    </motion.div>
  );
};

export default EditTask;
