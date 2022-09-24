import styled from 'styled-components';

export const StyledForm = styled.div`
  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.textMain};
  }
  textarea {
    resize: none;
  }
`;
