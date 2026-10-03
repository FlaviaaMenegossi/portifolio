import styled from 'styled-components';
import { rgba } from '../../styles/colors';

export const Card = styled.article`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow: hidden;
  transition:
    transform 0.35s ${({ theme }) => theme.easing.out},
    box-shadow 0.35s ease;

  /* Brilho da borda que segue o ponteiro */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 2;
    border-radius: inherit;
    padding: 1px;
    background: radial-gradient(
      300px circle at var(--mx, 50%) var(--my, 0%),
      ${({ theme }) => theme.colors.primaryNeon},
      transparent 70%
    );
    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask:
      linear-gradient(#000 0 0) content-box exclude,
      linear-gradient(#000 0 0);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.lift};

    &::before {
      opacity: 1;
    }
  }
`;

export const Browser = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgDark};
`;

export const BrowserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 12px;

  i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #3a3142;
    flex: none;
  }

  span {
    flex: 1;
    min-width: 0;
    margin-left: 8px;
    padding: 4px 10px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.bgRaised};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.6875rem;
    color: ${({ theme }) => theme.colors.textMuted};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const Shot = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.bgRaised};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    transition: transform 0.8s ${({ theme }) => theme.easing.out};
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px 24px 24px;
`;

export const Featured = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Title = styled.h3`
  font-size: 1.375rem;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 0.9375rem;
`;

export const Stack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: auto;
  padding-top: 8px;
`;

export const Action = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 0.9375rem;
  font-weight: 600;
  border: 1px solid ${({ theme, $primary }) => ($primary ? 'transparent' : theme.colors.border)};
  background: ${({ theme, $primary }) => ($primary ? rgba(theme.colors.primaryNeon, 0.16) : 'transparent')};
  color: ${({ theme, $primary }) => ($primary ? theme.colors.textWhite : theme.colors.textSoft)};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 17px;
    height: 17px;
    transition: transform 0.25s ${({ theme }) => theme.easing.out};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
    background: ${({ theme, $primary }) => ($primary ? rgba(theme.colors.primaryNeon, 0.3) : theme.colors.bgRaised)};
    border-color: ${({ theme, $primary }) => ($primary ? 'transparent' : rgba(theme.colors.primaryNeon, 0.5))};

    svg {
      transform: translate(2px, -2px);
    }
  }
`;
