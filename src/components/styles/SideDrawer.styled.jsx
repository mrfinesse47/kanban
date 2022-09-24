import styled from 'styled-components';

export const StyledSideDrawer = styled.aside`
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: calc(100vh - 97px);
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
  .menu {
    width: 300px;
    border-right: 1px solid ${({ theme }) => theme.colors.lines};

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
    width: 276px;
    height: 50.5px;
    color: ${({ theme }) => theme.colors.textAccent};
    button {
      width: 276px;
      height: 48px;
      display: flex;
      svg {
        fill: #828fa3;
      }
      .left {
        padding-right: 16px;
        padding-top: 2px;
      }
    }
  }
  .list-boards-item:not(.selected):hover {
    background-color: ${({ theme }) => theme.colors.buttonBackgroundHover};
    color: #635fc7;
    svg {
      fill: #635fc7;
    }
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.buttonMain};
    color: #fff;

    button {
      svg {
        fill: #fff;
      }
      cursor: unset;
    }
  }
  .new-board {
    color: #635fc7;
    button {
      svg {
        fill: #635fc7;
      }
    }
  }
  .close-container {
    margin-left: 31px;
    padding: 22px 0 30px 0;
    button {
      display: flex;
      align-items: center;
    }
    span {
      margin-left: 15px;
      color: ${({ theme }) => theme.colors.textAccent};
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
    }
  }
`;
