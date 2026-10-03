import styled from 'styled-components';
import { media } from '../../styles/mixins';

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.gutter};

  ${media('mobile')} {
    padding: 0 ${({ theme }) => theme.layout.gutterMobile};
  }
`;
