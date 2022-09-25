import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../features/boards/boardSlice';

const AddNewBoard = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [columnName, setColumnName] = useState('');
  const [columns, setColumns] = useState([]);

  const handleAddColumn = (e) => {
    // const newCol = { id: uuid(), name: '', tasks: [] };
    //if we did full stack we would just make the id unique
    //and the client could still generate the id
    setColumns((prev) => {
      const arr = [...prev];
      arr.push({ id: uuid(), name: '', tasks: [] });
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
            setColumnName(e.target.value);
          }}
          placeholder='e.g. Web Design'
        />
      </div>
      <div className='form-group'>
        <label>Board Columns</label>
        <ul className='column-list'>
          {columns.length > 0 &&
            columns.map((column, index) => (
              <li className='column-container' key={`col-${index}`}>
                <input
                  type='text'
                  className='column'
                  value={column.value}
                  onChange={(e) => handleColumnChange(e, index)}
                />
                <button
                  className='delete'
                  onClick={() => handleColumnDelete(index)}
                  type='button'
                >
                  <img src='./assets/icon-cross.svg' alt='delete' />
                </button>
              </li>
            ))}
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
