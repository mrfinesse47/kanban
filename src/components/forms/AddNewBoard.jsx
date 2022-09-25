import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../features/boards/boardSlice';
import { motion, AnimatePresence, Reorder } from 'framer-motion';

const AddNewBoard = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [columnName, setBoardName] = useState('');
  const [columns, setColumns] = useState([]);

  const handleAddColumn = (e) => {
    // const newCol = { id: uuid(), name: '', tasks: [] };
    //if we did full stack we would just make the id unique
    //and the client could still generate the id
    setColumns((prev) => {
      const arr = [...prev];
      arr.push({
        id: uuid(),
        name: '',
        tasks: [],
        error: { status: true, message: 'something' },
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

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addBoard({ name: columnName, columns }));
    setShowModal(false);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>Add New Board</h3>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='text'
          value={columnName}
          onChange={(e) => {
            setBoardName(e.target.value);
          }}
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
                      className={`column ${
                        column.error.status === true && 'error'
                      }`}
                      value={column.name}
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
