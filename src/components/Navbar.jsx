import React from 'react';
import { StyledNav } from './styles/Navbar.styled';

const Navbar = () => {
  return (
    <StyledNav>
      <div className='logo-container'>
        <img src='./assets/logo-light.svg' alt='kanban' />
      </div>
    </StyledNav>
  );
};

export default Navbar;
