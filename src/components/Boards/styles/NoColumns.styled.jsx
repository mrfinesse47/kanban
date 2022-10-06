import styled from 'styled-components';

export const StyledNoColumns = styled.main`
  width: calc(100vw);
  height: calc(100vh - 97px);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #828fa3;

  .btn {
    background-color: #635fc7;
    color: #fff;
    border-radius: 24px;
    width: 174px;
    padding: 15px 18px;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    margin-top: 32px;
  }
  .btn:hover {
    background-color: #a8a4ff;
  }
`;
