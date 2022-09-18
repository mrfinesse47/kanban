import styled from 'styled-components';

export const StyledSideDrawer = styled.aside`
  .menu {
    width: 300px;
    padding: 32px 20px;
    background: white;
    height: 100vh;
    /* border-radius: 10px; */
    text-align: center;
    z-index: 5;
  }

  .container {
    display: flex;
  }

  button {
    color: #444;
    border-color: #444;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 24px;
  }
  p {
    color: #444;
    font-weight: bold;
  }
`;
