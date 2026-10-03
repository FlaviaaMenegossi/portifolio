import styled from 'styled-components';
import { rgba } from '../../styles/colors';
import { media } from '../../styles/mixins';

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: auto -10% -30% -10%;
    height: 70%;
    z-index: -1;
    background: radial-gradient(50% 60% at 50% 100%, ${({ theme }) => rgba(theme.colors.secondaryNeon, 0.22)}, transparent 70%);
    pointer-events: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 48px;
  align-items: start;

  ${media('desktop')} {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    max-width: 680px;
    margin: 0 auto;
  }
`;

export const Info = styled.div`
  display: grid;
  gap: 22px;

  h3 {
    font-size: clamp(1.5rem, 3vw, 1.875rem);
  }

  p {
    font-size: 1.0625rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const Small = styled.p`
  && {
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
