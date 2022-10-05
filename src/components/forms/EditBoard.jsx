import React from 'react';
import BoardForm from './BoardForm';
import { editBoard } from '../../features/boards/boardSlice';
import { useSelector } from 'react-redux';

const EditBoard = () => {
  const { boards, selectedIndex } = useSelector((state) => state.board);

  if (!boards[selectedIndex]) {
    return <></>;
  }

  const initialItems = boards[selectedIndex].columns.map((column) => ({
    value: column.name,
    id: column.id,
    tasks: column.tasks,
    error: { status: false, message: '' },
  }));
  const initialName = boards[selectedIndex].name;

  return (
    <BoardForm
      formTitle={'Edit Board'}
      submitReduxAction={editBoard}
      initialItems={initialItems}
      initialName={initialName}
      callToAction='Save Changes'
    />
  );
};

export default EditBoard;
