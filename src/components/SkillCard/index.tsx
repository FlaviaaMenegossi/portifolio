import type { Skill } from '../../data/skills';
import { trackPointer } from '../../utils/trackPointer';
import { TechChip } from '../TechChip';
import * as S from './styles';

type SkillCardProps = Skill;

export function SkillCard({ icon: Icon, title, description, techs }: SkillCardProps) {
  return (
    <S.Card onPointerMove={trackPointer}>
      <S.Icon aria-hidden="true">
        <Icon />
      </S.Icon>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Techs aria-label={`Tecnologias de ${title}`}>
        {techs.map((tech) => (
          <TechChip key={tech.name} {...tech} />
        ))}
      </S.Techs>
    </S.Card>
  );
}
