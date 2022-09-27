import React from 'react';
import { StyledDropDownNavMenu } from './styles/DropDownNavMenu.styled';
import { motion, AnimatePresence } from 'framer-motion';

const DropDownNavMenu = ({
  isDropNavOpen,
  setIsDropNavOpen,
  buttonOneText,
  buttonTwoText,
}) => {
  return (
    <StyledDropDownNavMenu onClick={(e) => e.stopPropagation()}>
      <button
        id='drop-down-menu-button'
        className='button-options'
        onClick={() => {
          setIsDropNavOpen(!isDropNavOpen);
        }}
      >
        <img src='./assets/icon-vertical-ellipsis.svg' alt='options' />
      </button>
      <AnimatePresence>
        {isDropNavOpen && (
          <motion.div
            key='dropdown'
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='dropdown'
          >
            <ul>
              <li className='edit'>
                <button>{buttonOneText}</button>
              </li>
              <li className='delete'>
                <button>{buttonTwoText}</button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledDropDownNavMenu>
  );
};

export default DropDownNavMenu;
