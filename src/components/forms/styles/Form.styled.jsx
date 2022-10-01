import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 416px;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.textMain};
    margin-bottom: 24px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.formTextAccent};
    label {
      margin-bottom: 8px;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    }
    .input-wrapper {
    }
    input {
      font-family: 'Plus Jakarta Sans', sans-serif;
      border: 1px solid rgba(130, 143, 163, 0.25);
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      color: ${({ theme }) => theme.colors.textMain};
      border-radius: 4px;
      padding: 11.25px 16px;
      width: 100%;
      outline: none;
    }
    input::placeholder {
      color: ${({ theme }) => theme.colors.textAccent};
    }
    .error {
      border: 1px solid #ea5555;
      text-align: right;
      padding: 7.5px 16px;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      text-align: right;
      color: #ea5555;
    }
    textarea {
      font-family: 'Plus Jakarta Sans', sans-serif;
      border: 1px solid rgba(130, 143, 163, 0.25);
      background-color: ${({ theme }) => theme.colors.backgroundSecondary};
      color: ${({ theme }) => theme.colors.textMain};
      padding: 8px 16px;
      border-radius: 4px;
      width: 100%;
      height: 135px;
      font-weight: 500;
      font-size: 13px;
      line-height: 23px;
      resize: none;
      outline: none;
    }
    textarea::placeholder {
      color: ${({ theme }) => theme.colors.textAccent};
    }
  }

  .form-group:last-of-type {
    margin-bottom: 0;
  }

  .dynamic-list {
    .dynamic-container {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    .dynamic {
      margin-right: 16px;
      flex-grow: 1;
    }
  }
  .btn {
    background-color: ${({ theme }) => theme.colors.buttonSecondaryBackground};
    color: #635fc7;
    border-radius: 20px;
    width: 100%;
    padding-top: 8px;
    padding-bottom: 9px;
    font-weight: 700;
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    margin-bottom: 24px;
  }

  .btn-dark {
    background-color: #635fc7;
    color: #fff;
    margin-bottom: 0;
  }

  .task-btn {
    margin-top: 24px;
  }
`;
