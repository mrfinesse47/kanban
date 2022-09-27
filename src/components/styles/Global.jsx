import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
     box-sizing: border-box;
    }  

    html{
      width:100vw;
      margin:0;
      padding:0;
    }

    
  body {
    background: ${({ theme }) => theme.colors.backgroundMain};
    color: ${({ theme }) => theme.colors.textMain};
    font-family: 'Plus Jakarta Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 
  }

  p,h1,h2,h3,h4,ul{
    margin:0;
    padding:0;
  }

  ul,li{
    list-style:none
  }

  h1{
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
  }
  button {
    all: unset;
    cursor: pointer;
    padding:0;
    margin:0;
  }

  button:active {
  outline: none;
  border: none;
  }

  button:focus {
    outline: 0;
  }

  .test{
  
    height: 100vh;
    width:50%;
  }

  .App{
    display:flex;
    height: calc(100vh - 97px);
    position:relative;
    top:97px;
  }

  .wrapper{
    position:relative;
  }

  .checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
`;

export default GlobalStyles;
