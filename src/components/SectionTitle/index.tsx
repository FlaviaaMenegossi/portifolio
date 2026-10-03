import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import * as S from './styles';

type SectionTitleProps = {
  /** O trecho destacado em neon deve vir dentro de um `<span>`. */
  children: ReactNode;
  subtitle?: ReactNode;
  id?: string;
};

/** Título de seção com o sublinhado neon, que se desenha ao entrar na tela. */
export function SectionTitle({ children, subtitle, id }: SectionTitleProps) {
  const [ref, inView] = useInView<HTMLElement>();

  return (
    <S.Header ref={ref} data-reveal={inView ? 'shown' : 'hidden'}>
      <S.Title id={id} $visible={inView}>
        {children}
      </S.Title>
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Header>
  );
}
