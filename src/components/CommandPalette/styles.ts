import styled, { css, keyframes } from 'styled-components';
import { rgba } from '../../styles/colors';
import { media, motionSafe } from '../../styles/mixins';

const pop = keyframes`
  from { opacity: 0; transform: translateY(-8px) scale(0.98); }
`;

export const Dialog = styled.dialog`
  width: min(640px, calc(100vw - 32px));
  max-height: min(520px, calc(100dvh - 120px));
  margin: 12vh auto auto;
  padding: 0;
  border: 1px solid ${({ theme }) => rgba(theme.colors.primaryNeon, 0.35)};
  border-radius: ${({ theme }) => theme.radii.card};
  background: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.textWhite};
  box-shadow:
    0 30px 80px -20px rgba(0, 0, 0, 0.8),
    0 0 40px ${({ theme }) => rgba(theme.colors.primaryNeon, 0.18)};
  overflow: hidden;

  &[open] {
    display: flex;
    flex-direction: column;

    ${motionSafe(css`
      animation: ${pop} 0.22s ${({ theme }) => theme.easing.out};
    `)}
  }

  &::backdrop {
    background: rgba(5, 3, 8, 0.72);
    backdrop-filter: blur(6px);
  }

  ${media('mobile')} {
    margin-top: 72px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.colors.primaryText};
    flex: none;
  }

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    font-size: 1.0625rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textMuted};
    }
  }
`;

export const Kbd = styled.kbd`
  padding: 3px 7px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgRaised};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const List = styled.ul`
  flex: 1;
  overflow-y: auto;
  padding: 8px;
  overscroll-behavior: contain;
`;

export const Group = styled.li`
  & + & {
    margin-top: 6px;
  }

  > span {
    display: block;
    padding: 10px 12px 6px;
    font-size: 0.75rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textMuted};
  }

  ul {
    display: grid;
    gap: 2px;
  }
`;

export const Option = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme, $active }) => ($active ? theme.colors.textWhite : theme.colors.textSoft)};
  background: ${({ theme, $active }) => ($active ? rgba(theme.colors.primaryNeon, 0.16) : 'transparent')};
  box-shadow: ${({ theme, $active }) => ($active ? `inset 2px 0 0 ${theme.colors.primaryNeon}` : 'none')};

  svg {
    width: 18px;
    height: 18px;
    flex: none;
    color: ${({ theme, $active }) => ($active ? theme.colors.primaryText : theme.colors.textMuted)};
  }

  small {
    margin-left: auto;
    font-size: 0.8125rem;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const Empty = styled.p`
  padding: 28px 16px;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 10px 18px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};

  span {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  ${media('mobile')} {
    display: none;
  }
`;
