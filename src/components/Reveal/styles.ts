import styled from 'styled-components';

// A transição vive no GlobalStyle ([data-reveal]) para valer também em outros elementos.
export const Wrapper = styled.div<{ $fill: boolean }>`
  height: ${({ $fill }) => ($fill ? '100%' : 'auto')};
  min-width: 0;
`;
