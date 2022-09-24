import styled from 'styled-components';

export const StyledModal = styled.div`
  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
  }
`;
