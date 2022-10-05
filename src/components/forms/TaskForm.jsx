import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DynamicList from './DynamicList';
import DropDown from '../ui/DropDown';
import { closeModal } from '../../features/ui/uiSlice';
import { v4 as uuid } from 'uuid';

const TaskForm = ({ reduxTaskFormSubmitAction, formTitle }) => {
  const dispatch = useDispatch();
  const EMPTY_MESSAGE = "Can't be empty";
  const { boards, selectedIndex, modalTask } = useSelector(
    (state) => state.board
  );
  const [title, setTitle] = useState({
    value: modalTask.title,
    error: { status: false, message: '' },
  });
  const [description, setDescription] = useState(modalTask.description);
  const [status, setStatus] = useState(modalTask.status);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [subTasks, setSubtasks] = useState(
    modalTask.subtasks.map((subtask) => ({
      value: subtask.title,
      error: { status: false, message: '' },
      id: uuid(),
      isCompleted: subtask.isCompleted,
    }))
  );

  const allPossibleStatus = boards[selectedIndex].columns.map(
    (column) => column.name
  );

  const onSubmit = (e) => {
    e.preventDefault();
    let isTitleComplete = true;
    if (title.value === '') {
      setTitle((prev) => ({
        ...prev,
        error: { status: true, message: EMPTY_MESSAGE },
      }));
      isTitleComplete = false;
    }
    if (subTasks.some((subtask) => subtask.value === '')) {
      return setSubtasks((prev) => {
        return [...prev].map((subtask) => {
          if (subtask.value === '') {
            return {
              ...subtask,
              error: { status: true, message: EMPTY_MESSAGE },
            };
          }
          return subtask;
        });
      });
    }
    if (!isTitleComplete) return;
    dispatch(
      reduxTaskFormSubmitAction({
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
    dispatch(closeModal());
  };

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
        <h3>{formTitle}</h3>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={
              title.error.status === true ? title.error.message : title.value
            }
            onChange={(e) => {
              setTitle((prev) => ({ ...prev, value: e.target.value }));
            }}
            onClick={() => {
              if (title.error.status === true) {
                setTitle({
                  value: '',
                  error: { status: false, message: '' },
                });
              }
            }}
            placeholder='e.g. Take coffee break'
            className={`${title.error.status === true && 'error'}`}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
            id='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder='e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little.'
          />
        </div>

        <DynamicList
          title={'Subtasks'}
          items={subTasks}
          setItems={setSubtasks}
          typeToAdd='Subtask'
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

export default TaskForm;
