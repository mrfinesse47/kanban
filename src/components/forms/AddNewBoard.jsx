import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';

const AddNewBoard = ({ setShowModal }) => {
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        setShowModal(false);
        // add to boards object, update in local storage by redux possibly
      }}
    >
      <h3>Add New Board</h3>
      <div className='form-group'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='text' placeholder='e.g. Web Design' />
      </div>
      <div className='form-group'>
        <label>Columns</label>
        <div className='column-list'>
          <div className='column'>Todo</div> <div className='delete'></div>
          <div className='column'>Todo</div> <div className='delete'></div>
          <button className='button-light'>+ Add New Column</button>
          <button className='button-dark'>Create New Board</button>
        </div>
      </div>
    </StyledForm>
  );
};

export default AddNewBoard;
