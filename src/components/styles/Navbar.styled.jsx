import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  .logo-container {
    width: 201px;
    border-right: 1px solid ${({ theme }) => theme.colors.lines};
    img {
      padding: 28px 24.47px 26.78px 24px;
    }
  }
`;
