import styled from 'styled-components';

export const StyledTask = styled.main`
  height: (100vh - 97px);
  .task {
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 23px 16px;
    h4 {
      color: ${({ theme }) => theme.colors.textMain};
      margin-bottom: 8px;
    }
    .completion {
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: ${({ theme }) => theme.colors.textAccent};
    }
  }
`;
