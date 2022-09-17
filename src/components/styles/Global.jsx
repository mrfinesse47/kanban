import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
     box-sizing: border-box;
    }  

  body {
    background: ${({ theme }) => theme.backgroundMain};
    color: ${({ theme }) => theme.textMain};
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
