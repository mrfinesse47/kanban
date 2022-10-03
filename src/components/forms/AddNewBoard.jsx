import React from 'react';
import BoardForm from './BoardForm';
import { addBoard } from '../../features/boards/boardSlice';

const AddNewBoard = () => {
  return (
    <BoardForm
      formTitle={'Add New Board'}
      submitReduxAction={addBoard}
      callToAction='Create New Board'
    />
  );
};

export default AddNewBoard;
