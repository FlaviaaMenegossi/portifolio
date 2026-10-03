import styled from 'styled-components';
import { rgba } from '../../styles/colors';
import { media } from '../../styles/mixins';

export const Form = styled.form`
  display: grid;
  gap: 18px;
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 36px;
  border-radius: ${({ theme }) => theme.radii.card};
  box-shadow: ${({ theme }) => theme.shadows.card};

  ${media('mobile')} {
    padding: 22px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  ${media('mobile')} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Field = styled.div`
  display: grid;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textSoft};
`;

const control = ({ theme }: { theme: import('styled-components').DefaultTheme }) => `
  width: 100%;
  padding: 13px 14px;
  border-radius: ${theme.radii.field};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.bgDark};
  color: ${theme.colors.textWhite};
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #8a8295;
  }

  &:hover {
    border-color: ${rgba(theme.colors.primaryNeon, 0.45)};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primaryNeon};
    box-shadow: 0 0 0 3px ${rgba(theme.colors.primaryNeon, 0.3)}, 0 0 14px ${rgba(theme.colors.primaryNeon, 0.3)};
  }

  &[aria-invalid='true'] {
    border-color: ${theme.colors.danger};
  }
`;

export const Input = styled.input`
  ${control}
`;

export const Textarea = styled.textarea`
  ${control}
  min-height: 140px;
  resize: vertical;
`;

export const Error = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Status = styled.p<{ $tone: 'success' | 'error' | 'neutral' }>`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.875rem;
  color: ${({ theme, $tone }) =>
    $tone === 'success' ? theme.colors.success : $tone === 'error' ? theme.colors.danger : theme.colors.textMuted};

  svg {
    width: 18px;
    height: 18px;
    flex: none;
    margin-top: 1px;
  }
`;

export const Spinner = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: white;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
