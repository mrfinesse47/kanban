import React from 'react';
import { StyledDropDown } from './styles/DropDown.styled';

const DropDown = ({
  dropdownItems,
  currentSelection,
  handleSelectionChange,
}) => {
  console.log(dropdownItems, currentSelection);
  handleSelectionChange();
  return (
    <StyledDropDown>
      <>
        <div className='selector'>
          <img src='./assets/icon-chevron-down.svg' alt='open drop down' />
        </div>
        <div className='drop-menu'></div>
      </>
    </StyledDropDown>
  );
};

export default DropDown;
