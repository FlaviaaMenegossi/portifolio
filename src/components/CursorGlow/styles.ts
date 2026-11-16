import styled from 'styled-components';
import { rgba } from '../../styles/colors';

/* Camada fixa atrás de tudo: a luz aparece nos espaços entre os cartões e some suave ao sair da janela.
   No escuro a luz precisa ser bem mais forte para aparecer sobre o fundo quase preto. */
export const Glow = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* claro: luz menor e mais suave; escuro: maior e mais forte */
  background: radial-gradient(
    ${({ theme }) => (theme.mode === 'dark' ? '600px' : '340px')} circle at var(--x, 50%) var(--y, 30%),
    ${({ theme }) => rgba(theme.colors.primaryNeon, theme.mode === 'dark' ? 0.34 : 0.12)} 0%,
    ${({ theme }) => rgba(theme.colors.secondaryNeon, theme.mode === 'dark' ? 0.14 : 0.05)} 35%,
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.4s ease;

  &[data-visible='true'] {
    opacity: 1;
  }
`;
