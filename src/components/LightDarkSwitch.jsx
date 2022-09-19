import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toggleIsLight } from '../features/lightDark/lightDarkSlice';

const StyledLightDarkSwitch = styled.div`
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
      <button
        onClick={() => {
          dispatch(toggleIsLight(!isLight));
        }}
      >
        <div className='switch'>
          <motion.div className='handle' layout transition={spring} />
        </div>
      </button>
    </StyledLightDarkSwitch>
  );
};

export default LightDarkSwitch;
