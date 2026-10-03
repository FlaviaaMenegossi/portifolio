import styled, { css, keyframes } from 'styled-components';
import { rgba } from '../../styles/colors';
import { media, motionSafe, visuallyHidden } from '../../styles/mixins';

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const blink = keyframes`
  50% { opacity: 0; }
`;

const rise = keyframes`
  from { opacity: 0; transform: translateY(18px); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(79, 209, 165, 0.55); }
  70% { box-shadow: 0 0 0 8px rgba(79, 209, 165, 0); }
  100% { box-shadow: 0 0 0 0 rgba(79, 209, 165, 0); }
`;

/* Entrada orquestrada: cada bloco sobe em sequência (um único momento animado na página) */
const enter = (order: number) =>
  motionSafe(css`
    animation: ${rise} 0.9s ${({ theme }) => theme.easing.out} both;
    animation-delay: ${120 + order * 110}ms;
  `);

export const Section = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  min-height: min(100svh, 800px);
  padding: calc(${({ theme }) => theme.layout.headerHeight} + 56px) 0 96px;
  overflow: hidden;
  isolation: isolate;

  ${media('desktop')} {
    min-height: 0;
    padding: calc(${({ theme }) => theme.layout.headerHeight} + 40px) 0 72px;
  }
`;

/* Grade de pontos que some nas bordas + brilho que segue o ponteiro (--x/--y) */
export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* o brilho se dissolve no fim do hero, sem corte reto */
  mask-image: linear-gradient(to bottom, #000 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, #000 70%, transparent);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(${({ theme }) => rgba(theme.colors.textWhite, 0.11)} 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(520px circle at var(--x, 70%) var(--y, 35%), ${({ theme }) => rgba(theme.colors.primaryNeon, 0.16)}, transparent 60%),
      radial-gradient(40% 50% at 85% 20%, ${({ theme }) => rgba(theme.colors.secondaryNeon, 0.22)}, transparent 70%),
      radial-gradient(35% 45% at 5% 95%, ${({ theme }) => rgba(theme.colors.accentNeon, 0.08)}, transparent 70%);
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  align-items: center;
  gap: 48px;

  ${media('tablet')} {
    grid-template-columns: minmax(0, 1fr);
    gap: 56px;
  }
`;

export const Content = styled.div`
  display: grid;
  justify-items: start;
  gap: 22px;

  ${media('tablet')} {
    gap: 18px;
  }
`;

export const Status = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px 7px 12px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => rgba(theme.colors.success, 0.35)};
  background: ${({ theme }) => rgba(theme.colors.success, 0.08)};
  color: ${({ theme }) => theme.colors.textSoft};
  font-size: 0.875rem;
  font-weight: 500;
  ${enter(0)}

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.success};

    ${motionSafe(css`
      animation: ${pulse} 2s ease-out infinite;
    `)}
  }
`;

export const Greeting = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primaryText};
  ${enter(1)}
`;

export const Name = styled.h1`
  font-size: clamp(2.75rem, 6.4vw, 4.5rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  ${enter(2)}
`;

export const Role = styled.p`
  min-height: 1.5em;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: clamp(1.125rem, 2.2vw, 1.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
  ${enter(3)}

  .tag {
    color: ${({ theme }) => theme.colors.primaryNeon};
  }
`;

export const Hidden = styled.span`
  ${visuallyHidden}
`;

export const Caret = styled.span`
  display: inline-block;
  width: 0.55em;
  height: 1.05em;
  margin: 0 2px 0 3px;
  vertical-align: -0.15em;
  background: ${({ theme }) => theme.colors.accentNeon};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentNeon};

  ${motionSafe(css`
    animation: ${blink} 1s steps(1) infinite;
  `)}
`;

export const Description = styled.p`
  max-width: 52ch;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSoft};
  ${enter(4)}

  strong {
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: 600;
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px 16px;
  margin-top: 6px;
  ${enter(5)}
`;

export const Divider = styled.span`
  width: 1px;
  height: 28px;
  background: ${({ theme }) => theme.colors.border};

  ${media('mobile')} {
    display: none;
  }
`;

/* Foto com anel neon girando e tecnologias flutuando em volta */
export const Visual = styled.div`
  position: relative;
  justify-self: center;
  width: min(100%, 380px);
  aspect-ratio: 1;
  ${motionSafe(css`
    animation: ${rise} 1.1s ${({ theme }) => theme.easing.out} 0.35s both;
  `)}

  ${media('tablet')} {
    width: min(78%, 320px);
  }
`;

export const Ring = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 5px;
  background: ${({ theme }) => theme.gradients.ring};
  box-shadow:
    0 0 30px ${({ theme }) => rgba(theme.colors.primaryNeon, 0.45)},
    0 0 80px ${({ theme }) => rgba(theme.colors.secondaryNeon, 0.25)};

  ${motionSafe(css`
    animation: ${spin} 9s linear infinite;
  `)}
`;

export const Photo = styled.img`
  position: absolute;
  inset: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid ${({ theme }) => theme.colors.bgDark};
  transition: transform 0.6s ${({ theme }) => theme.easing.out};

  ${Visual}:hover & {
    transform: scale(1.03);
  }
`;

export const Chip = styled.span<{ $top: string; $left: string; $delay: number }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => rgba(theme.colors.primaryNeon, 0.35)};
  background: ${({ theme }) => rgba(theme.colors.bgCard, 0.88)};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.shadows.card};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.primaryText};
  }

  ${({ $delay }) =>
    motionSafe(css`
      animation: ${float} 5s ease-in-out ${$delay}s infinite;
    `)}

  ${media('mobile')} {
    font-size: 0.75rem;
    padding: 7px 11px;
  }
`;
