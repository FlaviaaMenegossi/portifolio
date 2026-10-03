import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import * as S from './styles';

type RevealProps = {
  children: ReactNode;
  /** Atraso em ms, para entradas em sequência. */
  delay?: number;
  /** Ocupa a altura toda do pai (cards da mesma linha com a mesma altura). */
  fill?: boolean;
};

/** Faz o conteúdo subir suavemente ao entrar na tela. Com “reduzir movimento”, aparece direto. */
export function Reveal({ children, delay = 0, fill = false }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <S.Wrapper
      ref={ref}
      $fill={fill}
      data-reveal={inView ? 'shown' : 'hidden'}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </S.Wrapper>
  );
}
