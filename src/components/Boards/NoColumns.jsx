import React from 'react';
import { StyledNoColumns } from './styles/NoColumns.styled';
import { useDispatch } from 'react-redux';
import { changeModalMode } from '../../features/ui/uiSlice';

const NoColumns = () => {
  const dispatch = useDispatch();
  return (
    <StyledNoColumns>
      <div className='no-columns'>
        <p>This board is empty. Create a new column to get started.</p>
        <button
          className='btn'
          onClick={() => {
            dispatch(changeModalMode('edit-board-menu'));
          }}
        >
          + Add New Column
        </button>
      </div>
    </StyledNoColumns>
  );
};

export default NoColumns;
