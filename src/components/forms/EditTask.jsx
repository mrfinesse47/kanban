import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';
import { useSelector } from 'react-redux';
import DynamicList from './DynamicList';
import DropDown from '../ui/DropDown';

const EditTask = () => {
  const { boards, selectedIndex, modalTask } = useSelector(
    (state) => state.board
  );
  const [title, setTitle] = useState(modalTask.title);
  const [status, setStatus] = useState(modalTask.status);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const allPossibleStatus = boards[selectedIndex].columns.map(
    (column) => column.name
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  const [subTasks, setSubtasks] = useState(
    //the form data
    modalTask.subtasks.map((subtask) => ({
      value: subtask.title,
      error: { status: false, message: '' },
      id: uuid(),
    }))
  );

  const handleStatusChange = (status) => {
    setStatus(status);
    setIsSelectOpen(false);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onClick={() => {
        setIsSelectOpen(false);
      }}
    >
      <StyledForm onSubmit={onSubmit}>
        <h3>Edit Task</h3>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder='e.g. Take coffee break'
          />
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
          setItems={setSubtasks}
        />
        <div className='form-group form-group-task'>
          <label>Status</label>
          <DropDown
            dropdownItems={allPossibleStatus}
            currentSelection={status}
            handleSelectionChange={handleStatusChange}
            isOpen={isSelectOpen}
            setIsOpen={setIsSelectOpen}
          />
        </div>
        <button className='btn btn-dark task-btn'>Save Changes</button>
      </StyledForm>
    </motion.div>
  );
};

export default EditTask;
