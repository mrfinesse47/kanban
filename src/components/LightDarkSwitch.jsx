import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleIsLight } from '../features/lightDark/lightDarkSlice';

const StyledLightDarkSwitch = styled.div`
  .switch-container {
    margin: 0 auto 8px;
    background-color: ${({ theme }) => theme.colors.backgroundMain};
    width: 83.667%;
    padding: 14px 0px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .switch {
    width: 40px;
    height: 20px;
    background-color: #635fc7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
  }

  .handle {
    position: relative;
    width: 14px;
    height: 14px;
    left: ${(props) => (props.isLight ? '-45%' : '45%')};
    background-color: white;
    border-radius: 50%;
  }
  button {
    padding: 0 23.67px;
  }

  img {
    width: 15px;
    height: 15px;
  }
`;

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
