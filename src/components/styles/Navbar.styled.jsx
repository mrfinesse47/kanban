import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  .logo-container {
    width: 201px;
    border-right: 1px solid ${({ theme }) => theme.colors.lines};
    img {
      padding: 28px 24.47px 26.78px 24px;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex: 1; //fills the remainder of space
  }
  .container h1 {
    padding-left: 24px;
  }
  .button-add-new-task {
    padding: 15px 25px;
    outline: none;
    background-color: ${({ theme }) => theme.colors.buttonMain};
    color: ${({ theme }) => theme.colors.buttonText};
    border: 0px;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    border-radius: 24px;
    margin-right: 24px;
  }
  .button-add-new-task .plus {
    position: relative;
    top: 0.5px;
  }
  .actions-container {
    display: flex;
    align-items: center;
    padding-right: 32.38px;
  }
`;
