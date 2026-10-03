import styled, { css, keyframes } from 'styled-components';
import { rgba } from '../../styles/colors';
import { motionSafe } from '../../styles/mixins';

const blink = keyframes`
  50% { opacity: 0; }
`;

export const Window = styled.figure`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  min-width: 0;

  &::before {
    /* brilho suave atrás da janela */
    content: '';
    position: absolute;
    inset: -40% -20% auto auto;
    width: 60%;
    aspect-ratio: 1;
    background: radial-gradient(circle, ${({ theme }) => rgba(theme.colors.primaryNeon, 0.18)}, transparent 70%);
    pointer-events: none;
  }
`;

export const Bar = styled.figcaption`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgRaised};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.textMuted};

  i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #ff5f57;

    &:nth-child(2) {
      background: #febc2e;
    }

    &:nth-child(3) {
      background: #28c840;
      margin-right: 8px;
    }
  }
`;

export const Code = styled.pre`
  position: relative;
  margin: 0;
  padding: 20px 20px 24px 0;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.875rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.textSoft};
  counter-reset: line;

  code {
    display: block;
    min-width: max-content;
  }
`;

export const Line = styled.span`
  display: block;
  padding-left: 52px;
  position: relative;

  &::before {
    counter-increment: line;
    content: counter(line);
    position: absolute;
    left: 0;
    width: 36px;
    text-align: right;
    color: ${({ theme }) => rgba(theme.colors.textMuted, 0.55)};
  }

  .k {
    color: #ff79f0;
  }
  .v {
    color: ${({ theme }) => theme.colors.textWhite};
  }
  .p {
    color: ${({ theme }) => theme.colors.primaryText};
  }
  .s {
    color: #ffd479;
  }
  .b {
    color: #7ee0ff;
  }
  .c {
    color: ${({ theme }) => theme.colors.textMuted};
    font-style: italic;
  }
`;

export const Caret = styled.span`
  display: inline-block;
  width: 8px;
  height: 1.1em;
  margin-left: 4px;
  vertical-align: text-bottom;
  background: ${({ theme }) => theme.colors.primaryNeon};

  ${motionSafe(css`
    animation: ${blink} 1.1s steps(1) infinite;
  `)}
`;
