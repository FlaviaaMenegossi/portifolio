import type { IconType } from 'react-icons';
import { PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';

export type SocialLink = {
  icon: IconType;
  href: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  { icon: PiGithubLogo, href: 'https://github.com/FlaviaaMenegossi', label: 'GitHub' },
  { icon: PiLinkedinLogo, href: 'https://www.linkedin.com/in/flaviamenegossi/', label: 'LinkedIn' },
];
