import styled from 'styled-components';

export const StyledDropDown = styled.div`
  position: relative;
  font-weight: 500;
  font-size: 13px;
  line-height: 23px;
  width: 416px;

  .selector {
    border: 1px solid rgba(130, 143, 163, 0.25);
    border-radius: 4px;
    button {
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 8.5px 16px;
      color: ${({ theme }) => theme.colors.textMain};
    }
  }
  .selector.active {
    border: 1px solid #635fc7;
  }
  .drop-menu {
    top: 45px;
    box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
    padding: 12px 16px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.textAccent};
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    width: 100%;
    li {
      padding-top: 4px;
      padding-bottom: 4px;
      button {
        width: 100%;
      }
    }
    li:hover {
      color: ${({ theme }) => theme.colors.textMain};
    }
  }
`;
