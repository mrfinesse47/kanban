import styled from 'styled-components';

export const StyledTaskExpanded = styled.div`
  width: 416px;

  header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      margin-right: 24px;
    }
  }
  h4 {
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
  }
  main {
    margin-top: 24px;
    margin-bottom: 24px;

    p {
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      color: #828fa3;
      margin-bottom: 24px;
    }
    .subtask {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.colors.backgroundMain};
      padding: 12px;
      margin-bottom: 8px;
      border-radius: 4px;
    }

    .subtask:hover {
      cursor: pointer;
      background-color: rgba(99, 95, 199, 0.25);
    }

    .subtask-title {
      width: 362px;
    }
  }
  .task-complete {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;
