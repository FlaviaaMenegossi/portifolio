import { css, type DefaultTheme } from 'styled-components';

type Breakpoint = keyof DefaultTheme['breakpoints'];

/** `@media (max-width: $breakpoint-*)` */
export const media =
  (breakpoint: Breakpoint) =>
  ({ theme }: { theme: DefaultTheme }) =>
    `@media (max-width: ${theme.breakpoints[breakpoint]})`;

/** Anel de foco visível só na navegação por teclado. */
export const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentNeon};
    outline-offset: 3px;
  }
`;

/** Animações só para quem não pediu “reduzir movimento”. */
export const motionSafe = (rules: ReturnType<typeof css>) => css`
  @media (prefers-reduced-motion: no-preference) {
    ${rules}
  }
`;

/** Esconde visualmente, mas mantém para leitores de tela. */
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;
