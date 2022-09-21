import styled from 'styled-components';

export const StyledBoards = styled.main`
  position: relative;
  left: 300px;

  #scroll {
    display: flex;
    max-width: 100vw;
    height: (100vh - 97px);
  }
  .column {
    width: 400px;
    min-width: 400px;
  }
`;
