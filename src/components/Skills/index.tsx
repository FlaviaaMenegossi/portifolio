import { skills } from '../../data/skills';
import { Container } from '../Container';
import { Reveal } from '../Reveal';
import { SectionTitle } from '../SectionTitle';
import { SkillCard } from '../SkillCard';
import * as S from './styles';

export function Skills() {
  return (
    <S.Section id="skills" aria-labelledby="skills-title">
      <Container>
        <SectionTitle id="skills-title" subtitle="Ferramentas que uso nos projetos publicados no meu GitHub.">
          Minhas <span>Habilidades</span>
        </SectionTitle>
        <S.Grid>
          {skills.map((skill, index) => (
            <li key={skill.title}>
              <Reveal delay={index * 90} fill>
                <SkillCard {...skill} />
              </Reveal>
            </li>
          ))}
        </S.Grid>
      </Container>
    </S.Section>
  );
}
