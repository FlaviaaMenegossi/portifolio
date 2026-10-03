import styled from 'styled-components';
import { media } from '../../styles/mixins';

export const Section = styled.section`
  position: relative;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 56px;

  ${media('desktop')} {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
`;

export const Text = styled.div`
  display: grid;
  gap: 18px;

  h3 {
    font-size: clamp(1.5rem, 3vw, 1.875rem);
    font-weight: 700;
  }

  p {
    font-size: 1.0625rem;
    color: ${({ theme }) => theme.colors.textSoft};
    max-width: 60ch;
  }

  strong {
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: 600;
  }
`;

export const StatsWrap = styled.div`
  margin-top: 10px;
`;
