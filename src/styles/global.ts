import { createGlobalStyle } from 'styled-components';
import { rgba } from './colors';

export const GlobalStyle = createGlobalStyle`
  /* Reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    color-scheme: dark;
    --transition-medium: 0.5s ease;
  }

  html {
    scroll-padding-top: calc(${({ theme }) => theme.layout.headerHeight} + 16px);
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.bgDark};
    color: ${({ theme }) => theme.colors.textWhite};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 1rem;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accentNeon};
    color: ${({ theme }) => theme.colors.bgDark};
  }

  /* Barra de rolagem na paleta */
  html {
    scrollbar-color: ${({ theme }) => theme.colors.border} ${({ theme }) => theme.colors.bgDark};
  }

  section {
    padding: 112px 0 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding: 72px 0 80px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a,
  button {
    touch-action: manipulation;
  }

  button,
  input,
  textarea {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accentNeon};
    outline-offset: 3px;
  }

  /* Typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.textMuted};
    text-wrap: pretty;
  }

  code,
  kbd {
    font-family: ${({ theme }) => theme.fonts.mono};
  }

  /* Revelação ao rolar (componente Reveal) */
  [data-reveal] {
    transition:
      opacity 0.8s ${({ theme }) => theme.easing.out},
      transform 0.8s ${({ theme }) => theme.easing.out};
    transition-delay: var(--reveal-delay, 0ms);
  }

  @media (prefers-reduced-motion: no-preference) {
    [data-reveal='hidden'] {
      opacity: 0;
      transform: translateY(24px);
    }
  }

  hr {
    border: 0;
    border-top: 1px solid ${({ theme }) => rgba(theme.colors.primaryNeon, 0.12)};
  }
`;
