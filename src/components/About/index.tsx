import { CodeWindow } from '../CodeWindow';
import { Container } from '../Container';
import { Reveal } from '../Reveal';
import { SectionTitle } from '../SectionTitle';
import { Stats } from '../Stats';
import * as S from './styles';

export function About() {
  return (
    <S.Section id="about" aria-labelledby="about-title">
      <Container>
        <SectionTitle id="about-title">
          Sobre <span>Mim</span>
        </SectionTitle>
        <S.Grid>
          <Reveal>
            <S.Text>
              <h3>Do layout ao deploy</h3>
              <p>
                Sou desenvolvedora front-end e gosto de transformar um layout em uma interface que funciona de verdade:
                componentes reutilizáveis, <strong>código tipado</strong> e cuidado com acessibilidade e responsividade.
              </p>
              <p>
                Aprendo construindo e publicando. Cada projeto deste portfólio está no ar e tem o código aberto no
                GitHub. Agora quero levar isso para um time de produto, na minha <strong>primeira vaga</strong> como
                desenvolvedora.
              </p>
              <S.StatsWrap>
                <Stats />
              </S.StatsWrap>
            </S.Text>
          </Reveal>
          <Reveal delay={120}>
            <CodeWindow />
          </Reveal>
        </S.Grid>
      </Container>
    </S.Section>
  );
}
