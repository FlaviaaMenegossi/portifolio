import styled from 'styled-components';
import { media, motionSafe } from '../../styles/mixins';
import { css } from 'styled-components';

export const Header = styled.header`
  display: grid;
  justify-items: center;
  gap: 18px;
  margin-bottom: 56px;
  text-align: center;

  ${media('mobile')} {
    margin-bottom: 40px;
  }
`;

export const Title = styled.h2<{ $visible: boolean }>`
  font-size: clamp(2rem, 4.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;

  span {
    color: ${({ theme }) => theme.colors.primaryNeon};
    position: relative;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 3px;
      border-radius: 3px;
      background: ${({ theme }) => theme.gradients.neon};
      box-shadow: 0 0 10px ${({ theme }) => theme.colors.primaryNeon};
      transform-origin: left center;

      ${({ $visible }) =>
        motionSafe(css`
          transform: scaleX(${$visible ? 1 : 0});
          transition: transform 0.9s ${({ theme }) => theme.easing.out} 0.25s;
        `)}
    }
  }
`;

export const Subtitle = styled.p`
  max-width: 56ch;
  font-size: 1.0625rem;
`;
