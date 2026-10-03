import { profile } from '../../data/profile';
import { useCountUp } from '../../hooks/useCountUp';
import { useInView } from '../../hooks/useInView';
import * as S from './styles';

function Stat({ value, label, start }: { value: number; label: string; start: boolean }) {
  const count = useCountUp(value, start);

  return (
    <S.Item>
      <S.Label>{label}</S.Label>
      <S.Value>
        <span aria-hidden="true">{count}</span>
        <S.Hidden>{value}</S.Hidden>
      </S.Value>
    </S.Item>
  );
}

/** Números reais do GitHub e da Vercel, que contam ao aparecer na tela. */
export function Stats() {
  const [ref, inView] = useInView<HTMLDListElement>();

  return (
    <S.List ref={ref}>
      {profile.stats.map((stat) => (
        <Stat key={stat.label} {...stat} start={inView} />
      ))}
    </S.List>
  );
}
