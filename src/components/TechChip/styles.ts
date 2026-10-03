import styled from 'styled-components';
import { rgba } from '../../styles/colors';

export const Chip = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => rgba(theme.colors.bgDark, 0.6)};
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
    flex: none;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  &:hover {
    border-color: ${({ theme }) => rgba(theme.colors.primaryNeon, 0.6)};
    color: ${({ theme }) => theme.colors.textWhite};
  }
`;
