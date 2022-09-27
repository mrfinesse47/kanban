import React from 'react';
import { StyledCheckBox } from './styles/CheckBox.styled';

const CheckBox = ({ isChecked }) => {
  console.log(isChecked);
  return (
    <StyledCheckBox isChecked={isChecked}>
      {isChecked && <img src='./assets/icon-check.svg' alt='checked' />}
    </StyledCheckBox>
  );
};

export default CheckBox;
