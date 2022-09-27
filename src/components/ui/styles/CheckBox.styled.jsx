import styled from 'styled-components';

export const StyledCheckBox = styled.div`
  width: 16px;
  height: 16px;
  background-color: #fff;
  background-color: ${({ theme }) => theme.colors.checkBoxBackgroundMain};
  /* checkBoxBackgroundMain */
`;
