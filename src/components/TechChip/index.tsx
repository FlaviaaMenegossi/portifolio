import type { IconType } from 'react-icons';
import * as S from './styles';

type TechChipProps = {
  name: string;
  icon?: IconType;
};

/** Etiqueta de tecnologia; deve ficar dentro de uma lista (<ul>). */
export function TechChip({ name, icon: Icon }: TechChipProps) {
  return (
    <S.Chip>
      {Icon && <Icon aria-hidden="true" />}
      {name}
    </S.Chip>
  );
}
