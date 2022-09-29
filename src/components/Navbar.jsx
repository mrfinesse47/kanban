import React from 'react';
import { StyledNav } from './styles/Navbar.styled';
import { useSelector } from 'react-redux';
import DropDownNavMenu from './DropDownNavMenu/DropDownNavMenu';

const Navbar = ({ isDropNavOpen, setIsDropNavOpen }) => {
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
          <DropDownNavMenu
            isDropNavOpen={isDropNavOpen}
            setIsDropNavOpen={setIsDropNavOpen}
            buttonOneText='Edit Board'
            buttonTwoText='Delete Board'
          />
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;
