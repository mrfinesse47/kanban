import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';
import { v4 as uuid } from 'uuid';

const AddNewBoard = ({ setShowModal }) => {
  const [columnName, setColumnName] = useState('');
  const [columns, setColumns] = useState([
    { id: '4567885aaaaa', name: 'Todo' },
    { id: '4567885bbbbb', name: 'Todo2' },
  ]);

  const handleAddColumn = (e) => {
    const newCol = { id: uuid(), name: '' };
    console.log('here');
    setColumns((prev) => {
      prev.push(newCol);
      return [...prev];
    });
  };

  const handleColumnChange = (e, index) => {
    {
      setColumns((prev) => {
        prev[index] = e.target.value;
        return prev;
      });
    }
  };

  const handleColumnDelete = (index) => {
    setColumns((prev) => {
      prev.splice(index, 1);
      return [...prev];
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
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
                  onChange={(e, index) => handleColumnChange(e, index)}
                />
                <button
                  className='delete'
                  onClick={(e, index) => handleColumnDelete(index)}
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
