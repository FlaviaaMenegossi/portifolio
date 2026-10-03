import styled from 'styled-components';
import { rgba } from '../../styles/colors';

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 4px 4px 18px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgDark};
  max-width: 100%;
`;

export const Address = styled.a`
  flex: 1;
  padding: 11px 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textWhite};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export const Button = styled.button<{ $copied: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 16px;
  border: 0;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $copied }) => ($copied ? rgba(theme.colors.success, 0.16) : theme.colors.bgRaised)};
  color: ${({ theme, $copied }) => ($copied ? theme.colors.success : theme.colors.textSoft)};
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
