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
  textarea {
    resize: none;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.formTextAccent};
    label {
      margin-bottom: 6px;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
    }
    .input-wrapper {
    }
    input {
      border: 1px solid rgba(130, 143, 163, 0.25);
      background-color: ${({ theme }) => theme.colors.backgroundMain};
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
      border: 1px solid red;
    }
  }

  .form-group:last-of-type {
    margin-bottom: 0;
  }

  .column-list {
    .column-container {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
    }
    .column {
      margin-right: 16px;
      flex-grow: 1;
    }
  }
  .btn {
    background-color: ${({ theme }) => theme.colors.formTextAccent};
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
    color: ${({ theme }) => theme.colors.formTextAccent};
    margin-bottom: 0;
  }
`;
