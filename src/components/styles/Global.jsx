import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
     box-sizing: border-box;
    }  

  body {
    background: ${({ theme }) => theme.colors.backgroundMain};
    color: ${({ theme }) => theme.colors.textMain};
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1{
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
  }
  button {
    all: unset;
    cursor: pointer;
  }

  .test{
    background-color:red;
    height: 100vh;
    width:50%;
  }

  .App{
    display:flex;
  }
  

`;

export default GlobalStyles;
