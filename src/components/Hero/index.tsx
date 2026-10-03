import { useRef, type PointerEvent } from 'react';
import { PiArrowDown, PiPaperPlaneTilt } from 'react-icons/pi';
import { SiReact, SiStyledcomponents, SiTypescript } from 'react-icons/si';
import profileImage from '../../assets/images/flavia.webp';
import { profile } from '../../data/profile';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Container } from '../Container';
import { NeonButton } from '../NeonButton';
import { SocialLinks } from '../SocialLinks';
import * as S from './styles';

const chips = [
  { label: 'React', icon: SiReact, top: '6%', left: '-14%', delay: 0 },
  { label: 'TypeScript', icon: SiTypescript, top: '72%', left: '-18%', delay: 1.2 },
  { label: 'styled-components', icon: SiStyledcomponents, top: '84%', left: '42%', delay: 2.1 },
];

export function Hero() {
  const role = useTypewriter(profile.taglines);
  const backdropRef = useRef<HTMLDivElement>(null);

  // Brilho que acompanha o ponteiro (só mouse; direto no estilo, sem re-renderizar)
  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse' || !backdropRef.current) return;
    const rect = event.currentTarget.getBoundingClientRect();
    backdropRef.current.style.setProperty('--x', `${event.clientX - rect.left}px`);
    backdropRef.current.style.setProperty('--y', `${event.clientY - rect.top}px`);
  };

  return (
    <S.Section id="hero" aria-labelledby="hero-title" onPointerMove={onPointerMove}>
      <S.Backdrop ref={backdropRef} aria-hidden="true" />
      <Container>
        <S.Grid>
          <S.Content>
            <S.Status>Disponível para vagas de front-end</S.Status>
            <S.Greeting>{'// olá, eu sou'}</S.Greeting>
            <S.Name id="hero-title">{profile.name}</S.Name>
            <S.Role>
              <S.Hidden>{profile.role}</S.Hidden>
              <span aria-hidden="true">
                <span className="tag">{'<'}</span>
                {role}
                <S.Caret />
                <span className="tag">{'/>'}</span>
              </span>
            </S.Role>
            <S.Description>
              Construo interfaces em <strong>React e TypeScript</strong>, do primeiro componente ao deploy. Estou em
              busca da minha primeira vaga como desenvolvedora front-end.
            </S.Description>
            <S.Actions>
              <NeonButton href="#projects">
                Ver projetos
                <PiArrowDown aria-hidden="true" />
              </NeonButton>
              <NeonButton href="#contact" variant="outline">
                Fale comigo
                <PiPaperPlaneTilt aria-hidden="true" />
              </NeonButton>
              <S.Divider aria-hidden="true" />
              <SocialLinks />
            </S.Actions>
          </S.Content>

          <S.Visual>
            <S.Ring aria-hidden="true" />
            <S.Photo src={profileImage} alt="Foto de Flavia Menegossi" width={640} height={640} fetchPriority="high" />
            {chips.map(({ label, icon: Icon, top, left, delay }) => (
              <S.Chip key={label} $top={top} $left={left} $delay={delay} aria-hidden="true">
                <Icon />
                {label}
              </S.Chip>
            ))}
          </S.Visual>
        </S.Grid>
      </Container>
    </S.Section>
  );
}
