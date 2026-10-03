import styled from 'styled-components';

export const Bar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.progress};
  height: 3px;
  background: ${({ theme }) => theme.gradients.neon};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primaryNeon};
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
`;
