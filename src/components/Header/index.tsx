import { useEffect, useState } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import { navLinks } from '../../data/navigation';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useScrolled } from '../../hooks/useScrolled';
import { Container } from '../Container';
import * as S from './styles';

const sectionIds = navLinks.map((link) => link.id);

type HeaderProps = {
  onOpenPalette: () => void;
};

export function Header({ onOpenPalette }: HeaderProps) {
  const scrolled = useScrolled(24);
  const active = useScrollSpy(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);

  // Fecha o menu com Esc ou ao voltar para a largura de desktop
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false);
    const desktop = window.matchMedia('(min-width: 993px)');
    const onResize = () => desktop.matches && setMenuOpen(false);

    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  return (
    <>
      <S.SkipLink href="#conteudo">Pular para o conteúdo</S.SkipLink>
      <S.Bar $scrolled={scrolled} $menuOpen={menuOpen}>
        <Container>
          <S.Inner>
            <S.Brand href="#hero" aria-label="Flavia Menegossi, voltar ao início" translate="no">
              <span aria-hidden="true">{'{'}</span>Flavia<span aria-hidden="true">{'}'}</span>
            </S.Brand>

            <S.Nav id="menu-principal" aria-label="Principal" $open={menuOpen}>
              <S.NavList>
                {navLinks.map(({ id, label }) => (
                  <li key={id}>
                    <S.NavLink
                      href={`#${id}`}
                      $active={active === id}
                      aria-current={active === id ? 'location' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </S.NavLink>
                  </li>
                ))}
              </S.NavList>
            </S.Nav>

            <S.Actions>
              <S.PaletteButton type="button" onClick={onOpenPalette} aria-label="Abrir busca rápida (Ctrl+K)">
                <PiMagnifyingGlass aria-hidden="true" />
                <span>Buscar</span>
                <kbd>{isMac ? '⌘K' : 'Ctrl K'}</kbd>
              </S.PaletteButton>
              <S.MenuButton
                type="button"
                $open={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="menu-principal"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              >
                <span aria-hidden="true" />
              </S.MenuButton>
            </S.Actions>
          </S.Inner>
        </Container>
      </S.Bar>
    </>
  );
}
