import styled from 'styled-components';

export const StyledBoards = styled.main`
  padding: 24px;
  position: relative;
  left: 300px;
  height: calc(100vh - 97px);

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  -webkit-scrollbar : {
    display: none;
  }

  .container-row-name {
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
    height: (100vh - 97px);
  }
  .column {
    width: 400px;
    min-width: 400px;
    margin-right: 24px;
  }
  .task {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 23px 16px;
    h4 {
      color: ${({ theme }) => theme.colors.textMain};
      margin-bottom: 8px;
    }
    .completion {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: ${({ theme }) => theme.colors.textAccent};
    }
  }
`;
