import styled from 'styled-components';
import { media } from '../../styles/mixins';

export const Section = styled.section``;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  > li {
    min-width: 0;
  }

  ${media('desktop')} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media('tablet')} {
    grid-template-columns: minmax(0, 1fr);
    max-width: 520px;
    margin: 0 auto;
    gap: 20px;
  }
`;
