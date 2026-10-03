import styled from 'styled-components';
import { media, visuallyHidden } from '../../styles/mixins';

export const List = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  ${media('mobile')} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Item = styled.div`
  display: grid;
  gap: 4px;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};

  ${media('mobile')} {
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 14px;
  }
`;

export const Value = styled.dd`
  order: -1;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.textWhite};
  font-variant-numeric: tabular-nums;
`;

export const Hidden = styled.span`
  ${visuallyHidden}
`;

export const Label = styled.dt`
  font-size: 0.875rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.textMuted};
`;
