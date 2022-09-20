import styled from 'styled-components';

export const StyledBoards = styled.main`
  #scroll {
    display: flex;
    max-width: 100vw;
    height: 100vh;
    white-space: nowrap;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .column {
    width: 400px;
    min-width: 400px;
    overflow: hidden;
  }
`;
