import styled from 'styled-components';

export const StyledCheckBox = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background-color: #fff;
  background-color: ${(props) =>
    props.isChecked
      ? '#635FC7'
      : ({ theme }) => theme.colors.checkBoxBackgroundMain};
  border: 1px solid rgba(130, 143, 163, 0.248914);
  border-radius: 2px;
`;
