import styled from 'styled-components';

export const StyledModal = styled.div`
  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    max-height: 100vh;
    overflow-y: auto;
    padding: 32px;
    border-radius: 6px;
    z-index: 101;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;
