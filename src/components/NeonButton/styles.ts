import styled, { css } from 'styled-components';
import { rgba } from '../../styles/colors';

export type Variant = 'primary' | 'outline' | 'ghost';

export const Button = styled.a<{ $variant: Variant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 12px 26px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  transition:
    transform 0.25s ${({ theme }) => theme.easing.out},
    box-shadow 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;

  svg {
    width: 18px;
    height: 18px;
    flex: none;
    transition: transform 0.25s ${({ theme }) => theme.easing.out};
  }

  &:hover svg:last-child:not(:first-child) {
    transform: translateX(3px);
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  ${({ $variant, theme }) =>
    $variant === 'primary' &&
    css`
      /* Gradiente da marca com texto branco: 6,6:1 no violeta e 4,5:1 no lado mais claro */
      background: linear-gradient(135deg, ${theme.colors.secondaryNeon} 0%, ${theme.colors.primaryNeon} 100%);
      color: white;
      box-shadow: 0 0 10px ${rgba(theme.colors.primaryNeon, 0.5)};

      &:hover {
        box-shadow: 0 0 22px ${rgba(theme.colors.primaryNeon, 0.8)};
        transform: translateY(-2px);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'outline' &&
    css`
      background: transparent;
      color: ${theme.colors.textWhite};
      border-color: ${rgba(theme.colors.textWhite, 0.7)};

      &:hover {
        border-color: ${theme.colors.primaryNeon};
        background: ${rgba(theme.colors.primaryNeon, 0.12)};
        transform: translateY(-2px);
      }
    `}

  ${({ $variant, theme }) =>
    $variant === 'ghost' &&
    css`
      background: ${theme.colors.bgRaised};
      color: ${theme.colors.textSoft};
      border-color: ${theme.colors.border};

      &:hover {
        color: ${theme.colors.textWhite};
        border-color: ${rgba(theme.colors.primaryNeon, 0.6)};
      }
    `}
`;
