import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../features/boards/boardSlice';
import { motion, AnimatePresence, Reorder } from 'framer-motion';

const AddNewBoard = ({ setShowModal }) => {
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
    setShowModal(false);
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
      <div className='form-group'>
        <label>Board Columns</label>

        <ul className='column-list'>
          <AnimatePresence delay>
            {columns.length > 0 &&
              columns.map((column, index) => {
                return (
                  <motion.li
                    transition={{ duration: 0.45 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='column-container'
                    key={column.id}
                  >
                    <input
                      type='text'
                      onClick={() => {
                        setErrorMessageOnColFalse(index);
                      }}
                      className={`column ${
                        column.error.status === true && 'error'
                      }`}
                      value={
                        column.error.status === true
                          ? column.error.message
                          : column.name
                      }
                      onChange={(e) => handleColumnChange(e, index)}
                    />

                    <button
                      className='delete'
                      onClick={() => handleColumnDelete(index)}
                      type='button'
                    >
                      <img src='./assets/icon-cross.svg' alt='delete' />
                    </button>
                  </motion.li>
                );
              })}
          </AnimatePresence>

          <button
            className='btn btn-light'
            type='button'
            onClick={handleAddColumn}
          >
            + Add New Column
          </button>
          <button className='btn btn-dark'>Create New Board</button>
        </ul>
      </div>
    </StyledForm>
  );
};

export default AddNewBoard;
