import { socialLinks } from '../../data/socialLinks';
import * as S from './styles';

export function SocialLinks() {
  return (
    <S.List>
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <li key={label}>
          <S.Item href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (abre em nova aba)`} title={label}>
            <Icon aria-hidden="true" />
          </S.Item>
        </li>
      ))}
    </S.List>
  );
}
