import { ContactForm } from '../ContactForm';
import { Container } from '../Container';
import { CopyEmail } from '../CopyEmail';
import { Reveal } from '../Reveal';
import { SectionTitle } from '../SectionTitle';
import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Contact() {
  return (
    <S.Section id="contact" aria-labelledby="contact-title">
      <Container>
        <SectionTitle id="contact-title">
          Vamos <span>Conversar</span>?
        </SectionTitle>
        <S.Grid>
          <Reveal>
            <S.Info>
              <h3>Tem uma vaga ou um projeto em mente?</h3>
              <p>
                Estou procurando minha primeira oportunidade como desenvolvedora front-end. Mande uma mensagem pelo
                formulário ou escreva direto no meu e-mail.
              </p>
              <CopyEmail />
              <S.Small>Também estou no GitHub e no LinkedIn:</S.Small>
              <SocialLinks />
            </S.Info>
          </Reveal>
          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </S.Grid>
      </Container>
    </S.Section>
  );
}
