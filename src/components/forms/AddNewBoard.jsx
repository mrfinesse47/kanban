import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../features/boards/boardSlice';
import { closeModal } from '../../features/ui/uiSlice';
import { motion, AnimatePresence } from 'framer-motion';
import DynamicList from './DynamicList';

const AddNewBoard = () => {
  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState({
    value: '',
    error: { status: false, message: '' },
  }); //form data
  const [columns, setColumns] = useState([]); //form data

  const handleAddColumn = (e) => {
    setColumns((prev) => {
      const arr = [...prev];
      arr.push({
        id: uuid(),
        name: '',
        tasks: [],
        error: { status: false, message: '' },
      });
      return arr;
    });
  };

  const handleColumnChange = (e, index) => {
    setColumns((prev) => {
      const arr = [...prev];
      arr[index].name = e.target.value;
      return arr;
    });
  };

  const handleColumnDelete = (index) => {
    setColumns((prev) => {
      const arr = [...prev];
      arr.splice(index, 1);
      return arr;
    });
  };

  const setErrorMessageOnColFalse = (index) => {
    setColumns((prev) => {
      const arr = [...prev];
      arr[index].error = { status: false, message: '' };
      return arr;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let isboardNameValueComplete = true;

    //check for completeness

    if (boardName.value === '') {
      setBoardName((prev) => ({
        ...prev,
        error: { status: true, message: "Can't be empty" },
      }));
      isboardNameValueComplete = false;
    }

    if (columns.some((column) => column.name === '')) {
      return setColumns((prev) => {
        return [...prev].map((column) => {
          if (column.name === '') {
            return {
              ...column,
              error: { status: true, message: "Can't be empty" },
            };
          }
          return column;
        });
      });
    }
    //if column names are ok but not name of board return and dont dispatch
    if (!isboardNameValueComplete) return;

    dispatch(addBoard({ name: boardName.value, columns }));
    dispatch(closeModal());
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>Add New Board</h3>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          value={
            boardName.error.status === true
              ? boardName.error.message
              : boardName.value
          }
          onClick={() => {
            if (boardName.error.status === true) {
              setBoardName({
                value: '',
                error: { status: false, message: '' },
              });
            }
          }}
          onChange={(e) => {
            setBoardName((prev) => ({ ...prev, value: e.target.value }));
          }}
          className={`${boardName.error.status === true && 'error'}`}
          placeholder='e.g. Web Design'
        />
      </div>

      <DynamicList
        title={'Board Columns'}
        items={columns}
        handleItemChange={handleColumnChange}
        handleItemDelete={handleColumnDelete}
        setErrorMessageOnItemFalse={setErrorMessageOnColFalse}
        handleAdditem={handleAddColumn}
      />
      <button className='btn btn-dark'>Create New Board</button>
    </StyledForm>
  );
};

export default AddNewBoard;
