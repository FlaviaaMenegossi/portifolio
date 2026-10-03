import { projects } from '../../data/projects';
import { Container } from '../Container';
import { ProjectCard } from '../ProjectCard';
import { Reveal } from '../Reveal';
import { SectionTitle } from '../SectionTitle';
import * as S from './styles';

export function Projects() {
  return (
    <S.Section id="projects" aria-labelledby="projects-title">
      <Container>
        <SectionTitle
          id="projects-title"
          subtitle="Todos no ar e com o código aberto no GitHub. Abra, teste e confira como foram feitos."
        >
          Meus <span>Projetos</span>
        </SectionTitle>
        <S.Grid>
          {projects.map((project, index) => (
            <li key={project.title}>
              <Reveal delay={(index % 3) * 90} fill>
                <ProjectCard {...project} />
              </Reveal>
            </li>
          ))}
        </S.Grid>
      </Container>
    </S.Section>
  );
}
