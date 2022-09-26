import styled from 'styled-components';

export const StyledTask = styled.div`
  height: (100vh - 97px);
  .task {
    box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 23px 16px 15px;
    h4 {
      color: ${({ theme }) => theme.colors.textMain};
    }
    .completion {
      padding-top: 8px;
      padding-bottom: 8px;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: ${({ theme }) => theme.colors.textAccent};
    }
    .completion:hover {
      color: ${({ theme }) => theme.colors.textMain};
    }
  }
`;
