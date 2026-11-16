import styled from 'styled-components';
import { rgba } from '../../styles/colors';

/* Camada fixa atrás de tudo: a luz aparece nos espaços entre os cartões e some suave ao sair da janela */
export const Glow = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background: radial-gradient(
    560px circle at var(--x, 50%) var(--y, 30%),
    ${({ theme }) => rgba(theme.colors.primaryNeon, 0.15)},
    transparent 60%
  );
  opacity: 0;
  transition: opacity 0.4s ease;

  &[data-visible='true'] {
    opacity: 1;
  }
`;
