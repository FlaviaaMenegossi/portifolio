import type { ComponentPropsWithoutRef } from 'react';
import * as S from './styles';

/** Largura máxima e respiro lateral padrão das seções. */
export function Container(props: ComponentPropsWithoutRef<'div'>) {
  return <S.Wrapper {...props} />;
}
