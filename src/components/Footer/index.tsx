import { PiArrowUp } from 'react-icons/pi';
import { navLinks } from '../../data/navigation';
import { Container } from '../Container';
import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

export function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.Top>
          <S.Brand>
            <strong translate="no">
              <span aria-hidden="true">{'{'}</span>Flavia<span aria-hidden="true">{'}'}</span>
            </strong>
            <p>Desenvolvedora front-end. Feito com React, TypeScript e styled-components.</p>
          </S.Brand>
          <S.Nav aria-label="Rodapé">
            <ul>
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </S.Nav>
          <SocialLinks />
        </S.Top>
        <S.Bottom>
          <p>
            © {new Date().getFullYear()} Flavia Menegossi. Dica: aperte <kbd>Ctrl</kbd> + <kbd>K</kbd> para navegar
            pelo teclado.
          </p>
          <S.BackToTop href="#hero">
            Voltar ao topo
            <PiArrowUp aria-hidden="true" />
          </S.BackToTop>
        </S.Bottom>
      </Container>
    </S.Wrapper>
  );
}
