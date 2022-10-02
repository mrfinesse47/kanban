import React from 'react';
import BoardForm from './BoardForm';
import { editBoard } from '../../features/boards/boardSlice';

const EditBoard = () => {
  return <BoardForm formTitle={'Edit Board'} submitReduxAction={editBoard} />;
};

export default EditBoard;
