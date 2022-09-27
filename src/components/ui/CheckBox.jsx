import React from 'react';
import { StyledCheckBox } from './styles/CheckBox.styled';

const CheckBox = ({ isChecked, clickHandler }) => {
  return (
    <StyledCheckBox
      tabIndex='1'
      isChecked={isChecked}
      onClick={clickHandler}
      role='checkbox'
      aria-checked={isChecked}
    >
      {isChecked && <img src='./assets/icon-check.svg' alt='checked' />}
    </StyledCheckBox>
  );
};

export default CheckBox;
