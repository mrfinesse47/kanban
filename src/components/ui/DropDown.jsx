import React from 'react';
import { StyledDropDown } from './styles/DropDown.styled';

const DropDown = ({
  dropdownItems,
  currentSelection,
  handleSelectionChange,
  isOpen,
  setIsOpen,
}) => {
  return (
    <StyledDropDown
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <>
        <div className={`selector ${isOpen && 'active'}`}>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <div>{currentSelection}</div>
            <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
              <path
                stroke='#635FC7'
                strokeWidth='2'
                fill='none'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className='drop-menu'>
            <ul>
              {dropdownItems.map((item, index) => (
                <li key={`drop-down-${item}-${index}`}>
                  <button onClick={() => handleSelectionChange(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    </StyledDropDown>
  );
};

export default DropDown;
