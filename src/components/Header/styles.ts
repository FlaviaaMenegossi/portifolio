import styled, { css } from 'styled-components';
import { rgba } from '../../styles/colors';
import { media, visuallyHidden } from '../../styles/mixins';

export const SkipLink = styled.a`
  ${visuallyHidden}

  &:focus-visible {
    clip: auto;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: fixed;
    top: 12px;
    left: 12px;
    z-index: ${({ theme }) => theme.zIndex.palette};
    padding: 12px 18px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.textWhite};
    color: ${({ theme }) => theme.colors.bgDark};
    font-weight: 600;
  }
`;

export const Bar = styled.header<{ $scrolled: boolean; $menuOpen: boolean }>`
  position: fixed;
  inset: 0 0 auto;
  z-index: ${({ theme }) => theme.zIndex.header};
  border-bottom: 1px solid transparent;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    backdrop-filter 0.3s ease;

  ${({ $scrolled, $menuOpen, theme }) =>
    ($scrolled || $menuOpen) &&
    css`
      background: ${rgba(theme.colors.bgDark, 0.85)};
      backdrop-filter: blur(14px) saturate(140%);
      -webkit-backdrop-filter: blur(14px) saturate(140%);
      border-bottom-color: ${rgba(theme.colors.primaryNeon, 0.14)};
    `}
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: ${({ theme }) => theme.layout.headerHeight};
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.colors.textWhite};
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.primaryNeon};
    transition: text-shadow 0.25s ease;
  }

  &:hover span {
    text-shadow: 0 0 12px ${({ theme }) => theme.colors.primaryNeon};
  }
`;

export const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  ${media('desktop')} {
    position: fixed;
    top: ${({ theme }) => theme.layout.headerHeight};
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px ${({ theme }) => theme.layout.gutterMobile} 24px;
    background: ${({ theme }) => theme.colors.bgDark};
    border-bottom: 1px solid ${({ theme }) => rgba(theme.colors.primaryNeon, 0.14)};
    box-shadow: 0 24px 40px -20px rgba(0, 0, 0, 0.8);
    transform-origin: top center;
    transition:
      opacity 0.25s ease,
      transform 0.3s ${({ theme }) => theme.easing.out},
      visibility 0.3s;

    ${({ $open }) =>
      $open
        ? css`
            opacity: 1;
            transform: none;
            visibility: visible;
          `
        : css`
            opacity: 0;
            transform: translateY(-8px);
            visibility: hidden;
          `}
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;

  ${media('desktop')} {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 500;
  font-size: 0.9375rem;
  color: ${({ theme, $active }) => ($active ? theme.colors.primaryText : theme.colors.textSoft)};

  &::after {
    content: '';
    position: absolute;
    left: 14px;
    right: 14px;
    bottom: 6px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme }) => theme.gradients.neon};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primaryNeon};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 0.35s ${({ theme }) => theme.easing.out};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
  }

  ${media('desktop')} {
    font-size: 1.0625rem;
    min-height: 48px;
    background: ${({ theme, $active }) => ($active ? rgba(theme.colors.primaryNeon, 0.12) : 'transparent')};
    border-radius: 12px;

    &::after {
      display: none;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PaletteButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 10px 0 14px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => rgba(theme.colors.bgCard, 0.8)};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.875rem;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  kbd {
    padding: 2px 6px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.bgRaised};
    font-size: 0.75rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
    border-color: ${({ theme }) => rgba(theme.colors.primaryNeon, 0.6)};
  }

  ${media('mobile')} {
    width: 44px;
    height: 44px;
    padding: 0;
    justify-content: center;

    span,
    kbd {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const MenuButton = styled.button<{ $open: boolean }>`
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};

  ${media('desktop')} {
    display: inline-grid;
  }

  span {
    position: relative;
    display: block;
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: ${({ theme, $open }) => ($open ? 'transparent' : theme.colors.textWhite)};
    transition: background-color 0.2s ease;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 20px;
      height: 2px;
      border-radius: 2px;
      background: ${({ theme }) => theme.colors.textWhite};
      transition: transform 0.3s ${({ theme }) => theme.easing.out};
    }

    &::before {
      transform: ${({ $open }) => ($open ? 'translateY(0) rotate(45deg)' : 'translateY(-6px)')};
    }

    &::after {
      transform: ${({ $open }) => ($open ? 'translateY(0) rotate(-45deg)' : 'translateY(6px)')};
    }
  }
`;
