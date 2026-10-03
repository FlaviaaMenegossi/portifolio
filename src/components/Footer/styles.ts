import styled from 'styled-components';
import { darken, rgba } from '../../styles/colors';
import { media } from '../../styles/mixins';

export const Wrapper = styled.footer`
  padding: 56px 0 40px;
  background: ${({ theme }) => darken(theme.colors.bgDark, 2)};
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.primaryNeon, 0.1)};
`;

export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  ${media('tablet')} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Brand = styled.div`
  display: grid;
  gap: 6px;

  strong {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;

    span {
      color: ${({ theme }) => theme.colors.primaryNeon};
    }
  }

  p {
    font-size: 0.9375rem;
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 6px;
  }

  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 12px;
    border-radius: ${({ theme }) => theme.radii.pill};
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.textSoft};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryText};
    }
  }

  ${media('tablet')} {
    margin-left: -12px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-top: 24px;

  p {
    font-size: 0.875rem;
  }

  kbd {
    padding: 2px 6px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.bgRaised};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.textSoft};
  }
`;

export const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSoft};
  transition:
    border-color 0.2s ease,
    color 0.2s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.25s ${({ theme }) => theme.easing.out};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textWhite};
    border-color: ${({ theme }) => rgba(theme.colors.primaryNeon, 0.6)};

    svg {
      transform: translateY(-2px);
    }
  }
`;
