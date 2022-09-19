import styled from 'styled-components';

export const StyledSideDrawer = styled.aside`
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transform: translateX('-300px');
    height: calc(100vh - 97px);
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  .menu {
    width: 300px;
    border-right: 1px solid ${({ theme }) => theme.colors.lines};

    /* border-radius: 10px; */
    z-index: 7;
    display: flex;
    flex-direction: column;
    h4 {
      margin-top: 15px;
      color: ${({ theme }) => theme.colors.mediumGray};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 2.4px;
      padding-left: 32px;
    }
  }

  p {
    font-weight: bold;
  }

  .list-boards {
    margin-top: 19px;
  }
  .list-boards-item {
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    padding: 14px 69px 15px 32px;
    border-radius: 0px 100px 100px 0px;
    width: 92%;
    color: ${({ theme }) => theme.colors.textAccent};
    button {
      display: flex;
      .left {
        padding-right: 16px;
        padding-top: 2px;
      }
    }
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.buttonMain};
    color: #fff;
  }
  .new-board {
    color: #635fc7;
  }
`;
