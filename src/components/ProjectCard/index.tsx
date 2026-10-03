import { PiArrowUpRight, PiGithubLogo, PiStar } from 'react-icons/pi';
import type { Project } from '../../data/projects';
import { trackPointer } from '../../utils/trackPointer';
import { TechChip } from '../TechChip';
import * as S from './styles';

type ProjectCardProps = Project;

export function ProjectCard({ title, description, stack, image, link, repo, featured }: ProjectCardProps) {
  const host = new URL(link).host;

  return (
    <S.Card onPointerMove={trackPointer}>
      <S.Browser aria-hidden="true">
        <S.BrowserBar>
          <i />
          <i />
          <i />
          <span>{host}</span>
        </S.BrowserBar>
      </S.Browser>
      <S.Shot>
        <img src={image} alt={`Tela inicial do projeto ${title}`} width={768} height={480} loading="lazy" decoding="async" />
      </S.Shot>
      <S.Body>
        {featured && (
          <S.Featured>
            <PiStar aria-hidden="true" />
            Projeto principal
          </S.Featured>
        )}
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Stack aria-label={`Tecnologias de ${title}`}>
          {stack.map((tech) => (
            <TechChip key={tech} name={tech} />
          ))}
        </S.Stack>
        <S.Actions>
          <S.Action href={link} target="_blank" rel="noopener noreferrer" $primary aria-label={`Ver o site ${title} (abre em nova aba)`}>
            Ver site
            <PiArrowUpRight aria-hidden="true" />
          </S.Action>
          <S.Action href={repo} target="_blank" rel="noopener noreferrer" aria-label={`Ver o código de ${title} no GitHub (abre em nova aba)`}>
            <PiGithubLogo aria-hidden="true" />
            Código
          </S.Action>
        </S.Actions>
      </S.Body>
    </S.Card>
  );
}
