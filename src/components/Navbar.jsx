import React from 'react';
import { StyledNav } from './styles/Navbar.styled';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { isLight } = useSelector((state) => state.lightDark);
  return (
    <StyledNav>
      <div className='logo-container'>
        <img
          src={`./assets/logo-${isLight ? 'dark' : 'light'}.svg`}
          alt='kanban'
        />
      </div>
      <div className='container'>
        <h1>Platform Launch</h1>
        <div className='actions-container'>
          <button className='button-add-new-task'>
            <span className='plus'>+</span> Add New Task
          </button>
          <button className='button-options'>
            <img src='./assets/icon-vertical-ellipsis.svg' alt='options' />
          </button>
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;