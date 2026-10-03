import styled from 'styled-components';
import { media } from '../../styles/mixins';

export const Section = styled.section``;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  > li {
    min-width: 0;
  }

  ${media('large')} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media('tablet')} {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
`;
