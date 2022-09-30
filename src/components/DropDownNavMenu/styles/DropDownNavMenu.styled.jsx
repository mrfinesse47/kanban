import styled from 'styled-components';

export const StyledDropDownNavMenu = styled.div`
  position: relative;
  .button-options {
    padding: 4px 8px;
  }
  .dropdown {
    width: 192px;
    padding: 16px;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.backgroundTertiary};
    color: ${({ theme }) => theme.colors.textMain};
    box-shadow: ${({ theme }) => theme.colors.dropdownBoxShadow};
    right: 0px;
    top: 45px;
    button {
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      width: 100%;
    }
    .edit {
      color: #828fa3;
    }
    .edit:hover {
      color: ${({ theme }) => theme.colors.textMain};
    }
    .delete {
      margin-top: 16px;
      color: #ea5555;
    }
    .delete:hover {
      color: #ff9898;
    }
  }
`;
