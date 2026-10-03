import styled from 'styled-components';
import { rgba } from '../../styles/colors';
import { media } from '../../styles/mixins';

/* Borda que acende seguindo o ponteiro (--mx/--my definidos no hover) */
export const Card = styled.article`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 28px;
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition:
    transform 0.35s ${({ theme }) => theme.easing.out},
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    padding: 1px;
    background: radial-gradient(
      260px circle at var(--mx, 50%) var(--my, 0%),
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
    transform: translateY(-5px);
    box-shadow: 0 0 20px ${({ theme }) => rgba(theme.colors.primaryNeon, 0.2)};

    &::before {
      opacity: 1;
    }
  }

  ${media('mobile')} {
    padding: 22px;
  }
`;

export const Icon = styled.span`
  display: inline-grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: ${({ theme }) => rgba(theme.colors.primaryNeon, 0.12)};
  border: 1px solid ${({ theme }) => rgba(theme.colors.primaryNeon, 0.3)};
  color: ${({ theme }) => theme.colors.primaryNeon};

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 0.9375rem;
`;

export const Techs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: 6px;
`;
