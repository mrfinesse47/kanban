import React, { useState } from 'react';
import { StyledForm } from './styles/Form.styled';

import { useDispatch } from 'react-redux';
import { closeModal } from '../../features/ui/uiSlice';

import DynamicList from './DynamicList';

const BoardForm = ({
  initialItems = [],
  initialName = '',
  formTitle,
  submitReduxAction,
}) => {
  const EMPTY_MESSAGE = "Can't be empty";
  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState({
    value: initialName,
    error: { status: false, message: '' },
  }); //form data
  const [items, setItems] = useState(initialItems); //form data

  const onSubmit = (e) => {
    e.preventDefault();
    let isboardNameValueComplete = true;

    //check for completeness

    if (boardName.value === '') {
      setBoardName((prev) => ({
        ...prev,
        error: { status: true, message: EMPTY_MESSAGE },
      }));
      isboardNameValueComplete = false;
    }

    if (items.some((item) => item.value === '')) {
      return setItems((prev) => {
        return [...prev].map((item) => {
          if (item.value === '') {
            return {
              ...item,
              error: { status: true, message: EMPTY_MESSAGE },
            };
          }
          return item;
        });
      });
    }
    //if column names are ok but not name of board return and dont dispatch
    if (!isboardNameValueComplete) return;

    dispatch(
      submitReduxAction({
        name: boardName.value,
        columns: items.map((item) => ({
          id: item.id,
          tasks: item.tasks,
          name: item.value,
        })),
      })
    );
    dispatch(closeModal());
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>{formTitle}</h3>
      <div className='form-group'>
        <label htmlFor='name'>Board Name</label>
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

      <DynamicList title={'Board Columns'} items={items} setItems={setItems} />
      <button className='btn btn-dark'>Create New Board</button>
    </StyledForm>
  );
};

export default BoardForm;
