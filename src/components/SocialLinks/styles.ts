import styled from 'styled-components';
import { rgba } from '../../styles/colors';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.a`
  display: inline-grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => rgba(theme.colors.bgCard, 0.7)};
  color: ${({ theme }) => theme.colors.textSoft};
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.25s ease,
    transform 0.25s ${({ theme }) => theme.easing.out};

  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
    border-color: ${({ theme }) => theme.colors.primaryNeon};
    box-shadow: 0 0 16px ${({ theme }) => rgba(theme.colors.primaryNeon, 0.45)};
    transform: translateY(-2px);
  }
`;
