import styled from 'styled-components';

export const StyledSideDrawer = styled.aside`
  .container {
    transform: translateX('-300px');
  }
  .menu {
    width: 300px;
    margin-top: 15px;
    border-right: 1px solid ${({ theme }) => theme.colors.lines};
    background: ${({ theme }) => theme.colors.backgroundMain};
    height: 100vh;
    /* border-radius: 10px; */
    padding-left: 32px;
    z-index: 7;
    display: flex;
    flex-direction: column;
    h4 {
      color: ${({ theme }) => theme.colors.mediumGray};
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 2.4px;
    }
  }

  button {
    border-color: #444;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 24px;
  }
  p {
    font-weight: bold;
  }

  .list-boards {
    margin-top: 19px;
  }
  .list-boards-item {
    background-color: ${({ theme }) => theme.colors.buttonMain};
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
  }
`;
