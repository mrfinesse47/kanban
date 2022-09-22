import styled from 'styled-components';

export const StyledBoards = styled.main`
  padding: 24px;
  /* position: relative;
  left: 300px; */
  height: calc(100vh - 97px);
  z-index: 1;
  /* 
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-scrollbar : {
    display: none;
  } */

  .container-column-name {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    .status {
      background-color: #49c4e5;
      margin-right: 12px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
    }
    h3 {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 2.4px;
      color: ${({ theme }) => theme.colors.textAccent};
    }
  }

  #scroll {
    display: flex;
    max-width: 100vw;
    height: 100%;
  }
  .column {
    width: 400px;
    min-width: 400px;
    margin-right: 24px;
    height: calc(100vh - 97px);
    /* background-image: ${({ theme }) => theme.colors.backgroundGradient}; */
  }

  .new-column-option {
    margin-top: 39px;
    margin-bottom: 39px;
    width: 280px;
    background-image: ${({ theme }) => theme.colors.backgroundGradient};
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      color: #828fa3;
      width: 280px;
      display: flex;
      justify-content: center;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
      text-align: center;
    }
  }
`;
