import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleIsLight } from '../features/lightDark/lightDarkSlice';
import { StyledLightDarkSwitch } from './styles/LightDarkSwitch.styled';

const LightDarkSwitch = () => {
  const { isLight } = useSelector((state) => state.lightDark);
  const dispatch = useDispatch();

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <StyledLightDarkSwitch isLight={isLight}>
      <div className='switch-container'>
        <img src='./assets/icon-light-theme.svg' alt='light theme' />
        <button
          onClick={() => {
            dispatch(toggleIsLight(!isLight));
          }}
        >
          <div className='switch'>
            <motion.div className='handle' layout transition={spring} />
          </div>
        </button>
        <img src='./assets/icon-dark-theme.svg' alt='dark theme' />
      </div>
    </StyledLightDarkSwitch>
  );
};

export default LightDarkSwitch;
