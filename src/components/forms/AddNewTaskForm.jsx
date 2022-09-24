import React from 'react';
import { StyledForm } from './styles/Form.styled';

const AddNewTaskForm = ({ setShowModal }) => {
  return (
    <StyledForm>
      <h3>Add New Task</h3>
      <form
        onSubmit={() => {
          setShowModal(false);
        }}
      >
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Description</label>
          <textarea id='description' rows='6' />
        </div>
      </form>
    </StyledForm>
  );
};

export default AddNewTaskForm;
