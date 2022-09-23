import React from 'react';
import styled from 'styled-components';

const StyledOpenDrawer = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 3.2vh;
  width: 56px;
  height: 48px;
  background-color: #635fc7;
  border-radius: 0px 100px 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    display: block;
  }
`;

const OpenDrawer = () => {
  return (
    <StyledOpenDrawer>
      <img src='./assets/icon-show-sidebar.svg' alt='open menu' />
    </StyledOpenDrawer>
  );
};

export default OpenDrawer;
