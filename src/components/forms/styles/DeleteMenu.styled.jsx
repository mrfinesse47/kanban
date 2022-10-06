import styled from 'styled-components';

export const StyledDeleteMenu = styled.div`
  width: 416px;
  padding-bottom: 8px;
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #ea5555;
    margin-bottom: 24px;
  }
  p {
    font-weight: 500;
    font-size: 13px;
    line-height: 23px;
    color: #828fa3;
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 24px;

    button {
      text-align: center;
      border-radius: 20px;
      width: 200px;
      height: 40px;
    }
    .delete {
      color: #fff;
      background-color: #ea5555;
      margin-right: 16px;
    }
    .delete:hover {
      background: #ff9898;
    }
    .cancel {
      color: #635fc7;
      background-color: ${({ theme }) => theme.colors.buttonSecondary};
    }
    .cancel:hover {
      background-color: ${({ theme }) => theme.colors.buttonSecondaryHover};
    }
  }
`;
